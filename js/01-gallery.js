import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageList = document.querySelector(".gallery");
let imageModal;

imageList.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);

// markup for HTML
console.log(markup(galleryItems));
imageList.insertAdjacentHTML("beforeend", markup(galleryItems));

function markup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

// create modal

function handleClick(event) {
  event.preventDefault();
  const targetImage = event.target;
  if (!targetImage.classList.contains("gallery__image")) {
    return;
  }
  // if (event.target === event.currentTarget) {
  //   return;
  // }
  const currentImage = event.target.dataset.source;
  const currentImageDescription = event.target.getAttribute("alt");
  imageModal = basicLightbox.create(
    `<img src="${currentImage}" alt="${currentImageDescription}">`
  );
  imageModal.show();
}

// close modal

function handleKeydown(event) {
  if (event.code === "Escape") {
    imageModal.close();
  }
}
