// Shared tag filtering logic for listing pages
// Reads ?tag= from URL and filters cards with data-tags attribute

function initTagFilter() {
  // Always reset state first
  document.querySelectorAll<HTMLElement>("[data-tags]").forEach((card) => {
    card.classList.remove("hidden");
  });

  document.querySelectorAll<HTMLElement>("[data-collapse-when-empty]").forEach((group) => {
    group.classList.remove("hidden");
  });

  document.querySelectorAll<HTMLElement>("[data-tag]").forEach((tag) => {
    tag.classList.remove("tag-pill-active");
  });

  const banner = document.getElementById("tag-filter-banner");
  if (banner) {
    banner.classList.add("hidden");
  }

  const sidebarClear = document.getElementById("sidebar-clear");
  if (sidebarClear) {
    sidebarClear.classList.add("hidden");
  }

  // Now check for active tag
  const params = new URLSearchParams(window.location.search);
  const activeTag = params.get("tag") || "";

  if (!activeTag) {
    return;
  }

  // Filter cards by tag
  document.querySelectorAll<HTMLElement>("[data-tags]").forEach((card) => {
    const cardTags = (card.dataset.tags || "").split(",").filter(Boolean);
    const matches = cardTags.includes(activeTag);
    card.classList.toggle("hidden", !matches);
  });

  // Hide empty status groups (for standards page)
  document.querySelectorAll<HTMLElement>("[data-collapse-when-empty]").forEach((group) => {
    const hasVisible = group.querySelector<HTMLElement>("[data-tags]:not(.hidden)") !== null;
    group.classList.toggle("hidden", !hasVisible);
  });

  // Highlight active tag in sidebar
  document.querySelectorAll<HTMLElement>("[data-tag]").forEach((tag) => {
    if (tag.dataset.tag === activeTag) {
      tag.classList.add("tag-pill-active");
    }
  });

  // Show filter banner
  const label = document.getElementById("tag-filter-label");
  if (banner && label) {
    label.textContent = activeTag;
    banner.classList.remove("hidden");
  }

  // Show sidebar clear button
  if (sidebarClear) {
    sidebarClear.classList.remove("hidden");
  }
}

// Run on initial load and after Astro view transitions
document.addEventListener("astro:page-load", initTagFilter);
if (document.readyState !== "loading") {
  initTagFilter();
}
