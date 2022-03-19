import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

function renderGallery (gallery) {
    return gallery.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    ).join('');
}

galleryList.innerHTML = renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { animationSpeed: 250, loop: true, enableKeyboard: true, preloading: true, docClose: true, captionsData: 'alt'});