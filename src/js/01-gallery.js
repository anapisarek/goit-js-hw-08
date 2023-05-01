import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const mainGallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const imgEl = document.createElement('div');
  imgEl.innerHTML = `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
  </a>`;
  //   mainGallery.innerHTML += imgEl;
  mainGallery.append(imgEl);
});

// console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});