// Glossary page: search, category filters, and iOS-contacts-style alphabet scrubber.
// Follows the tagFilter.ts pattern: re-inits on astro:page-load, fresh DOM refs each time.

// Alphabet rail geometry
const RAIL_MAX_PX = 544; // cap rail height (34rem)
const RAIL_MIN_PX = 140; // below this the rail is unusable — hide it entirely
const RAIL_GAP_PX = 12; // breathing room above/below the rail
const RAIL_LABEL_MIN_PX = 14; // below this row height, collapse labels to dots (iOS "A · C · E" style)
const HEADER_OFFSET_PX = 72; // sticky site header height (matches toolbar's top-[72px])

let abort: AbortController | null = null;

function initGlossaryPage() {
  const navEl = document.getElementById("glossary-quicknav");
  const searchEl = document.getElementById("glossary-search");
  if (!navEl || !(searchEl instanceof HTMLInputElement)) return; // not on the glossary page

  const nav = navEl;
  const searchInput = searchEl;

  // Tear down listeners from a previous init. Note: with <ClientRouter />,
  // astro:page-load also fires on the initial load, so init runs twice there —
  // the abort makes that harmless (fresh listeners replace the old set).
  abort?.abort();
  abort = new AbortController();
  const signal = abort.signal;

  const items = document.querySelectorAll<HTMLElement>(".glossary-item");
  const sections = document.querySelectorAll<HTMLElement>(".glossary-section");
  const categoryBtns = document.querySelectorAll<HTMLElement>(".filter-pill[data-category]");
  const jumpBtns = [...document.querySelectorAll<HTMLElement>(".glossary-jump")];
  const toolbar = document.getElementById("glossary-toolbar");
  const filtersRow = document.getElementById("glossary-filters");
  const filtersToggle = document.getElementById("glossary-filters-toggle");
  const filteredEl = document.getElementById("glossary-filtered");
  const noResults = document.getElementById("glossary-no-results");
  const clearBtn = document.getElementById("filter-clear");
  const tooltip = document.getElementById("glossary-tooltip");
  const tooltipLetter = document.getElementById("glossary-tooltip-letter");

  const letters = (nav.dataset.letters || "").split("");
  const totalItems = items.length;
  let searchTimer: ReturnType<typeof setTimeout>;
  let isScrubbing = false;
  let scrubLetter = "";
  // Letters that currently have at least one visible item (updated by applyFilters)
  const availableLetters = new Set<string>(letters);

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "";
  const activeQuery = params.get("q") || "";
  if (activeQuery) searchInput.value = activeQuery;

  function sectionFor(letter: string): HTMLElement | null {
    return document.getElementById("section-" + (letter === "#" ? "num" : letter));
  }

  // Bottom edge of the sticky toolbar, measured live (height varies as pills wrap)
  function toolbarBottom(): number {
    return toolbar ? toolbar.getBoundingClientRect().bottom : HEADER_OFFSET_PX;
  }

  // === Filters toggle (pills are collapsed unless the viewport is wide AND tall,
  // see .glossary-filters in components.css) ===

  function setFiltersExpanded(expanded: boolean) {
    filtersRow?.classList.toggle("!flex", expanded);
    filtersToggle?.setAttribute("aria-expanded", String(expanded));
    if (filtersToggle) filtersToggle.textContent = expanded ? "Filters \u25B4" : "Filters \u25BE";
    queueRailUpdate();
  }

  filtersToggle?.addEventListener(
    "click",
    () => {
      setFiltersExpanded(!filtersRow?.classList.contains("!flex"));
    },
    { signal }
  );

  // === Filtering ===

  function updateUrl() {
    const url = new URL(window.location.href);
    const query = searchInput.value.trim();
    if (activeCategory) url.searchParams.set("category", activeCategory);
    else url.searchParams.delete("category");
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    history.replaceState(null, "", url.toString());
  }

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;
    availableLetters.clear();

    categoryBtns.forEach((b) => {
      b.classList.toggle("filter-pill-active", b.dataset.category === activeCategory);
    });
    clearBtn?.classList.toggle("!inline-block", !!activeCategory);

    items.forEach((item) => {
      const matchesQuery = !query || (item.dataset.term || "").includes(query);
      const matchesCategory =
        !activeCategory || (item.dataset.categories || "").split(",").includes(activeCategory);
      const show = matchesQuery && matchesCategory;
      item.classList.toggle("hidden", !show);
      if (show) {
        visibleCount++;
        availableLetters.add(item.dataset.letter || "");
      }
    });

    // Hide letter sections with no visible items (no empty boxes left behind)
    sections.forEach((s) => {
      s.classList.toggle("hidden", !availableLetters.has(s.dataset.letter || ""));
    });

    jumpBtns.forEach((b) => {
      b.classList.toggle("glossary-rail-btn-dimmed", !availableLetters.has(b.dataset.letter || ""));
    });

    const filtering = !!(query || activeCategory);
    if (filteredEl) {
      filteredEl.textContent = filtering ? `(${visibleCount} of ${totalItems})` : "";
      filteredEl.classList.toggle("hidden", !filtering);
    }
    noResults?.classList.toggle("hidden", !(filtering && visibleCount === 0));
    updateUrl();
    // Toolbar height can change when the clear button appears / pills rewrap
    queueRailUpdate();
  }

  categoryBtns.forEach((btn) => {
    btn.addEventListener(
      "click",
      () => {
        activeCategory = activeCategory === btn.dataset.category ? "" : btn.dataset.category || "";
        applyFilters();
      },
      { signal }
    );
  });

  clearBtn?.addEventListener(
    "click",
    () => {
      activeCategory = "";
      applyFilters();
    },
    { signal }
  );

  searchInput.addEventListener(
    "input",
    () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(applyFilters, 200);
    },
    { signal }
  );

  searchInput.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        searchInput.blur();
        applyFilters();
      }
    },
    { signal }
  );

  // === Rail: position between the sticky toolbar and the viewport bottom ===
  // The toolbar (search + filters) is sticky with a higher z-index; the rail must
  // never slide underneath it, and the toolbar's height varies as filter pills wrap.
  // When the footer scrolls into view, the rail's zone shrinks to stay above it.

  const footer = document.querySelector("footer");

  function positionRail() {
    const zoneTop = toolbarBottom() + RAIL_GAP_PX;
    let zoneBottom = window.innerHeight - RAIL_GAP_PX;
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      zoneBottom = Math.min(zoneBottom, footerTop - RAIL_GAP_PX);
    }
    const avail = zoneBottom - zoneTop;
    // Very short viewports (e.g. landscape phones with the keyboard up): the rail
    // would overlap the toolbar or shrink into an unusable strip — hide it instead.
    if (avail < RAIL_MIN_PX) {
      nav.classList.add("hidden");
      return;
    }
    nav.classList.remove("hidden");
    const height = Math.min(RAIL_MAX_PX, avail);
    // Center within the free zone, iOS-style
    const top = zoneTop + (avail - height) / 2;
    nav.style.top = `${top}px`;
    nav.style.height = `${height}px`;
  }

  // === Rail: adaptive label collapsing (iOS "A · C · E" when space is tight) ===

  function relayoutRail() {
    const n = letters.length;
    if (nav.clientHeight === 0) return; // rail is hidden; labels recompute on unhide
    const rowH = nav.clientHeight / Math.max(n, 1);
    const stride = rowH >= RAIL_LABEL_MIN_PX ? 1 : Math.ceil(RAIL_LABEL_MIN_PX / rowH);
    // Distribute labels evenly from first to last index so the endpoints are
    // always letters and every gap is a dot (never two adjacent letters like "X Z")
    const shown = new Set<number>();
    if (stride === 1) {
      for (let i = 0; i < n; i++) shown.add(i);
    } else {
      const count = Math.max(2, Math.floor((n - 1) / stride) + 1);
      for (let j = 0; j < count; j++) {
        shown.add(Math.round((j * (n - 1)) / (count - 1)));
      }
    }
    jumpBtns.forEach((b, i) => {
      b.textContent = shown.has(i) ? b.dataset.letter || "" : "\u00B7";
    });
  }

  function updateRail() {
    positionRail();
    relayoutRail();
  }

  // The toolbar is sticky: its bottom edge moves while the page scrolls until it
  // docks at the header, so track scroll as well as resize (rAF-throttled).
  let railRaf = 0;
  function queueRailUpdate() {
    if (railRaf) return;
    railRaf = requestAnimationFrame(() => {
      railRaf = 0;
      // Don't move the rail under the user's finger mid-scrub
      if (!isScrubbing) updateRail();
    });
  }

  updateRail();
  window.addEventListener("resize", queueRailUpdate, { signal });
  window.addEventListener("scroll", queueRailUpdate, { passive: true, signal });
  signal.addEventListener("abort", () => cancelAnimationFrame(railRaf));

  // === Rail: scrubbing ===

  function getLetterFromY(y: number): string {
    const rect = nav.getBoundingClientRect();
    const fraction = Math.max(0, Math.min(1, (y - rect.top) / rect.height));
    const index = Math.min(Math.floor(fraction * letters.length), letters.length - 1);
    return letters[index] || "";
  }

  // Snap to the nearest letter that has visible entries (search outward)
  function snapToAvailable(letter: string): string {
    if (availableLetters.has(letter)) return letter;
    const start = letters.indexOf(letter);
    for (let d = 1; d < letters.length; d++) {
      const before = letters[start - d];
      const after = letters[start + d];
      if (before && availableLetters.has(before)) return before;
      if (after && availableLetters.has(after)) return after;
    }
    return "";
  }

  function highlightActive(letter: string) {
    jumpBtns.forEach((b) => {
      b.classList.toggle("glossary-rail-btn-active", b.dataset.letter === letter);
    });
  }

  function scrollToLetter(letter: string) {
    const section = sectionFor(letter);
    if (!section) return;
    const top = window.scrollY + section.getBoundingClientRect().top - toolbarBottom() - RAIL_GAP_PX;
    window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
  }

  function showBubble(letter: string, y: number) {
    if (!tooltip || !tooltipLetter) return;
    tooltipLetter.textContent = letter;
    tooltip.classList.remove("hidden");
    tooltip.classList.add("flex");
    const navRect = nav.getBoundingClientRect();
    const clampedY = Math.max(navRect.top, Math.min(navRect.bottom, y));
    tooltip.style.left = `${navRect.right + 10}px`;
    tooltip.style.top = `${clampedY}px`;
  }

  function hideBubble() {
    tooltip?.classList.add("hidden");
    tooltip?.classList.remove("flex");
  }

  function scrubTo(y: number) {
    const letter = snapToAvailable(getLetterFromY(y));
    if (!letter) return;
    showBubble(letter, y);
    if (letter === scrubLetter) return;
    scrubLetter = letter;
    highlightActive(letter);
    scrollToLetter(letter);
  }

  navEl.addEventListener(
    "pointerdown",
    (e) => {
      e.preventDefault();
      isScrubbing = true;
      scrubLetter = "";
      // Capture the pointer: dragging anywhere on screen keeps scrubbing (iOS behavior)
      try {
        nav.setPointerCapture(e.pointerId);
      } catch {
        // pointer may no longer be active; scrubbing still works within the rail
      }
      scrubTo(e.clientY);
    },
    { signal }
  );

  navEl.addEventListener(
    "pointermove",
    (e) => {
      if (!isScrubbing) return;
      e.preventDefault();
      scrubTo(e.clientY);
    },
    { signal }
  );

  function endScrub(e: PointerEvent) {
    if (!isScrubbing) return;
    isScrubbing = false;
    scrubLetter = "";
    hideBubble();
    if (nav.hasPointerCapture(e.pointerId)) nav.releasePointerCapture(e.pointerId);
    updateRail();
  }

  navEl.addEventListener("pointerup", endScrub, { signal });
  navEl.addEventListener("pointercancel", endScrub, { signal });

  // Keyboard accessibility: Tab to a letter, Enter/Space jumps to it
  jumpBtns.forEach((b) => {
    b.addEventListener(
      "click",
      () => {
        const letter = snapToAvailable(b.dataset.letter || "");
        if (!letter) return;
        highlightActive(letter);
        scrollToLetter(letter);
      },
      { signal }
    );
  });

  // === Highlight the letter in view while scrolling normally ===

  if (sections.length > 0) {
    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const letter = (entry.target as HTMLElement).dataset.letter || "";
          if (entry.isIntersecting) inView.add(letter);
          else inView.delete(letter);
        });
        if (!isScrubbing && inView.size > 0) {
          // Topmost visible section = first in rail order
          const best = letters.find((l) => inView.has(l));
          if (best) highlightActive(best);
        }
      },
      { rootMargin: `-${HEADER_OFFSET_PX}px 0px -60% 0px` }
    );
    sections.forEach((s) => observer.observe(s));
    signal.addEventListener("abort", () => observer.disconnect());
  }

  // A category arriving via URL on a small screen should be visible, not hidden
  if (activeCategory) setFiltersExpanded(true);

  applyFilters();
}

document.addEventListener("astro:page-load", initGlossaryPage);
if (document.readyState !== "loading") {
  initGlossaryPage();
}
