import{a as g,S as u,i as l}from"./assets/vendor-CvO0Ho4m.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="30800646-c6d90f2a5eec003f430555754",y="https://pixabay.com/api/",d=o=>g.get(`${y}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data),n={galleryList:document.querySelector(".js-gallery-list"),loader:document.querySelector(".js-loader")},h=new u(".gallery-list a",{captionsData:"alt",captionDelay:250}),b=o=>{const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:m,downloads:p})=>`
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
                  <span>${m}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Downloads</b>
                  <span>${p}</span>
                </p>
              </div>
            </a>
          </li>
        `).join("");n.galleryList.insertAdjacentHTML("beforeend",r),h.refresh()},L=()=>{n.galleryList.innerHTML=""},S=()=>{n.loader.classList.add("is-active")},$=()=>{n.loader.classList.remove("is-active")},c={searchForm:document.querySelector(".js-submit-form")},v=o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(L(),!r){l.warning({title:"Caution",message:"You forgot to type what you are looking for!",position:"topRight"});return}S(),d(r).then(s=>{if(s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(s.message)}).finally(()=>{$(),c.searchForm.reset()})};c.searchForm.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
