import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
let instance;
list.addEventListener("click", handlerClick);
function handlerClick(evt) {
  let isTarget = evt.target.classList.contains("gallery__image");
  if (!isTarget) {
    return;
  }
  evt.preventDefault();
  let originalImage = evt.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`);
  instance.show();
  const visible = instance.visible();
    if (visible) {
      document.addEventListener("keydown", handleKey);
      function handleKey(evt) {
        if (evt.code === "Escape") {
          instance.close();
        }
      }
    }
    else {
      document.removeEventListener("keydown", handleKey);
    }
  }


