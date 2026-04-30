
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const refs = {
  searchForm: document.querySelector('.js-submit-form'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.target.elements['search-text'].value.trim();

  clearGallery();

  if (!searchQuery) {
    iziToast.warning({
      message: 'You forgot to type what you are looking for!',
      position: 'topRight',
      color: '#FFCE1B',
          maxWidth: '432px',
          messageColor: '#ffffff',
    });

    return;
  }

  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: '#EF4040',
          maxWidth: '432px',
          messageColor: '#ffffff',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        color: '#EF4040',
          maxWidth: '432px',
          messageColor: '#ffffff',
      });

      console.log(error.message);
    })
    .finally(() => {
      hideLoader();
      refs.searchForm.reset();
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);