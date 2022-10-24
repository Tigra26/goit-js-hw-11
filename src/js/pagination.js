import { refs } from './refs';
import CardTemplate from '../templates/cardTpl.hbs';
import { pageCount, searchValue, getImages } from '../index';

let globalTotalPages = 0;
let globalPage = 0;

function onRenderPagination(totalPages, page) {
  
  let paginationMarkup = '';  
  let activePage = '';  
  let beforePage = page - 1;  
  let afterPage = page + 1; 
  
  if (page > 1) { 
    paginationMarkup += `
    <li class="pagination__item pagination__item--prev">Prev</li>`;
  };
  
  if(page > 2) { 
    paginationMarkup += `
    <li class="pagination__item pagination__item--numb-first">1</li>`;

    if(page > 3) { 
      paginationMarkup += `
      <li class="pagination__item pagination__item--dots">...</li>`;
    }
  }

  if (totalPages === 0) {
    refs.paginationEl.classList.add('pagination__off');
    return;
  }
  
  refs.paginationEl.classList.remove('pagination__off')
  
  if (totalPages === 1) {
    beforePage === 0;
  } else if (page === totalPages) {
    beforePage -= 2;
  } else if (page === totalPages - 1) {
    beforePage -= 1;
  } 
  
  if (page === 1) {    
    afterPage = afterPage + 2;
  } else if (page === 2) {    
    afterPage += 1;
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength += 1) {    
    if (pageLength > totalPages) { 
      continue;
    }

    if (pageLength == 0) { 
      pageLength += 1;
    }

    if (page === pageLength) { 
      activePage = 'pagination__item--active';      
    } else {  
      activePage = '';        
    }
    paginationMarkup += `
      <li class="pagination__item pagination__item--numb ${activePage}">${pageLength}</li>`;
  }

  if(page < totalPages - 1){ 
    if(page < totalPages - 2){ 
      paginationMarkup += `
        <li class="pagination__item pagination__item--dots">...</li>`;
    }
    paginationMarkup += `
      <li class="pagination__item pagination__item--numb-last">${totalPages}</li>`;
  }
    
  if (page < totalPages) { 
    paginationMarkup += `
      <li class="pagination__item pagination__item--next">Next</li>`;    
  };

  globalTotalPages = totalPages;
  globalPage = page;
  
  refs.paginationEl.innerHTML = paginationMarkup;  
};

refs.paginationEl.addEventListener('click', onPaginationBtnClick);


function onPaginationBtnClick(event) {
  if (event.target.nodeName !== 'LI') {
    return;
  }
  else {    
    const listenerTarget = event.target.closest('li').textContent;

    window.scroll({
      top: 0,
      behavior: 'smooth'
    });  
    
    switch (listenerTarget) {
      case 'Prev':
        onRenderMarkupByPagination(globalPage - 1);
        onRenderPagination(globalTotalPages, globalPage - 1);
        break;

      case 'Next':
        onRenderMarkupByPagination(globalPage + 1);
        onRenderPagination(globalTotalPages, globalPage + 1);
        break;
    
      case '1':
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, 1);
        break;
    
      case String(globalPage - 1):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalPage - 1);
        break;

      case String(globalPage - 2):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalPage - 2);
        break;
    
      case String(globalPage - 3):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalPage - 3);
        break;

      case String(globalPage + 1):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalPage + 1);
        break;
    
      case String(globalPage + 2):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalPage + 2);
        break;

      case String(globalPage + 3):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalPage + 3);
        break;
    
      case String(globalTotalPages):
        onRenderMarkupByPagination(listenerTarget);
        onRenderPagination(globalTotalPages, globalTotalPages);
        break;

      default:
        return;
    }
  };
}

function onRenderMarkupByPagination(page) {

  if (searchValue === "") {
    pageCount = page;

    getImages();

  }

  if (apiSearchData.query === "") {
    movieFilter.page = page;    
    movieFilter.fetchMovies(genreValue, yearValue)
    .then(res => {
      refs.galleryEl.innerHTML = filmCard(handleMovieCard(res.results));   
      refs.paginationEl.innerHTML = ''    
      if(res.total_pages >= 500){
        res.total_pages = 500;
      }
      onRenderPagination(res.total_pages, res.page);
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
  }
}

export { onRenderPagination };