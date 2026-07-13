document.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest("[data-expand]") as HTMLElement | null;
  if (!btn) return;

  const cardId = btn.getAttribute("data-expand");
  if (!cardId) return;

  const tagContainer = document.getElementById(`${cardId}-tags`);
  if (!tagContainer) return;

  const tagBase = tagContainer.getAttribute("data-tag-base") || "";
  const extraTags = btn.getAttribute("data-extra-tags")?.split(",") ?? [];
  extraTags.forEach((tag) => {
    const tagLink = document.createElement("a");
    tagLink.href = tagBase ? `${tagBase}?tag=${encodeURIComponent(tag)}` : `#`;
    tagLink.className = "tag-pill filter-tag";
    tagLink.dataset.tag = tag;
    tagLink.textContent = tag;
    tagContainer.insertBefore(tagLink, btn);
  });
  btn.remove();
});
