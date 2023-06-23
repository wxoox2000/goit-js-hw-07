import { galleryItems } from './gallery-items.js';
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
        alt="${item.description}"
      />
    </a>
  </li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
list.addEventListener("click", handlerClick);
function handlerClick(evt) {
  let isTarget = evt.target.classList.contains("gallery__image");
  if (!isTarget) {
    return;
  }
  evt.preventDefault();
}

// console.log(lightbox);
