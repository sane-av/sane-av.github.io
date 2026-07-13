// Shared tag filtering logic for listing pages
// Reads ?tag= from URL and filters cards with data-tags attribute

function initTagFilter() {
  const params = new URLSearchParams(window.location.search);
  const activeTag = params.get("tag") || "";
  
  if (!activeTag) {
    return;
  }
  
  // Filter cards by tag
  const cards = document.querySelectorAll<HTMLElement>("[data-tags]");
  cards.forEach((card) => {
    const cardTags = (card.dataset.tags || "").split(",").filter(Boolean);
    const matches = cardTags.includes(activeTag);
    card.classList.toggle("hidden", !matches);
  });
  
  // Hide empty status groups (for standards page)
  const statusGroups = document.querySelectorAll<HTMLElement>("[data-collapse-when-empty]");
  statusGroups.forEach((group) => {
    const hasVisible = group.querySelector<HTMLElement>("[data-tags]:not(.hidden)") !== null;
    group.classList.toggle("hidden", !hasVisible);
  });
  
  // Highlight active tag in sidebar
  const sidebarTags = document.querySelectorAll<HTMLElement>("[data-tag]");
  sidebarTags.forEach((tag) => {
    if (tag.dataset.tag === activeTag) {
      tag.classList.add("bg-primary/10", "border-primary/30", "text-primary");
    }
  });
  
  // Show filter banner
  const banner = document.getElementById("tag-filter-banner");
  const label = document.getElementById("tag-filter-label");
  if (banner && label) {
    label.textContent = activeTag;
    banner.classList.remove("hidden");
  }
}

// Clear filter handler
document.getElementById("tag-filter-clear")?.addEventListener("click", () => {
  const url = new URL(window.location.href);
  url.searchParams.delete("tag");
  window.location.href = url.toString();
});

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTagFilter);
} else {
  initTagFilter();
}
