"use strict";

// Content remains visible and photo links work when JavaScript is unavailable.
const filterBar = document.querySelector("[data-publication-filters]");
if (filterBar) {
  const buttons = [...filterBar.querySelectorAll("[data-filter]")];
  const papers = [...document.querySelectorAll(".all-publications .publication-entry")];
  const count = filterBar.querySelector(".result-count");
  function filterPapers(value) {
    let visible = 0;
    papers.forEach((paper) => {
      const show = value === "all" || (value === "reviewed" ? paper.dataset.category !== "preprints" : paper.dataset.category === "preprints");
      paper.hidden = !show;
      if (show) visible += 1;
    });
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === value)));
    count.textContent = `${visible} publication${visible === 1 ? "" : "s"}`;
  }
  buttons.forEach((button) => button.addEventListener("click", () => filterPapers(button.dataset.filter)));
  filterBar.hidden = false;
  filterPapers("all");
}

const dialog = document.querySelector(".photo-dialog");
if (dialog && typeof dialog.showModal === "function") {
  const photos = [...document.querySelectorAll("[data-gallery-image]")];
  const image = dialog.querySelector(".dialog-image");
  const title = dialog.querySelector("#photo-title");
  const caption = dialog.querySelector("#photo-caption");
  const count = dialog.querySelector("[data-gallery-count]");
  let current = 0;
  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.href;
    image.alt = photo.querySelector("img").alt;
    title.textContent = photo.dataset.title;
    caption.textContent = photo.dataset.caption;
    count.textContent = `${current + 1} / ${photos.length}`;
  }
  photos.forEach((photo, index) => photo.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    showPhoto(index);
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }));
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.querySelector("[data-gallery-prev]").addEventListener("click", () => showPhoto(current - 1));
  dialog.querySelector("[data-gallery-next]").addEventListener("click", () => showPhoto(current + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(current + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}
