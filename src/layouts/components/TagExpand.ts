document.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest("[data-expand]") as HTMLElement | null;
  if (!btn) return;

  const cardId = btn.getAttribute("data-expand");
  if (!cardId) return;

  const tagContainer = document.getElementById(`${cardId}-tags`);
  if (!tagContainer) return;

  const extraTags = btn.getAttribute("data-extra-tags")?.split(",") ?? [];
  extraTags.forEach((tag) => {
    const tagBtn = document.createElement("button");
    tagBtn.type = "button";
    tagBtn.className = "tag-pill filter-tag";
    tagBtn.dataset.tag = tag;
    tagBtn.textContent = tag;
    tagContainer.insertBefore(tagBtn, btn);
  });
  btn.remove();
});
