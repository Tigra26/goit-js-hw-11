import{a as p,S as g,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="30800646-c6d90f2a5eec003f430555754",d="https://pixabay.com/api/",y=o=>p.get(`${d}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data),l={galleryList:document.querySelector(".js-gallery-list"),loader:document.querySelector(".js-loader")},h=new g(".gallery a",{captionsData:"alt",captionDelay:250}),b=o=>{const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:m})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img class="gallery-img" src="${s}" alt="${e}" />
              <div class="gallery-info">
                <p class="gallery-info-item">
                  <b>Likes</b>
                  <span>${t}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Views</b>
                  <span>${a}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Comments</b>
                  <span>${f}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Downloads</b>
                  <span>${m}</span>
                </p>
              </div>
            </a>
          </li>
        `).join("");l.galleryList.insertAdjacentHTML("beforeend",r),h.refresh()},L=()=>{l.galleryList.innerHTML=""},x=()=>{l.loader.classList.add("is-active")},S=()=>{l.loader.classList.remove("is-active")},c={searchForm:document.querySelector(".js-submit-form")},$=o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(L(),!r){n.warning({message:"You forgot to type what you are looking for!",position:"topRight",color:"#FFCE1B",maxWidth:"432px",messageColor:"#ffffff"});return}x(),y(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"});return}b(s.hits)}).catch(s=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"}),console.log(s.message)}).finally(()=>{S(),c.searchForm.reset()})};c.searchForm.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
