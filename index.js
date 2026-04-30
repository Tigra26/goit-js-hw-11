import{a as p,S as g,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="30800646-c6d90f2a5eec003f430555754",d="https://pixabay.com/api/",y=o=>p.get(`${d}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.data),l={galleryList:document.querySelector(".js-gallery-list"),loader:document.querySelector(".js-loader")},h=new g(".gallery a",{captionsData:"alt",captionDelay:250}),L=o=>{const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:f,downloads:m})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img class="gallery-img" src="${s}" alt="${e}" />
              <div class="gallery-info">
                <p class="gallery-info-item">
                  <b>Likes</b>
                  <span>${r}</span>
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
        `).join("");l.galleryList.innerHTML=t,h.refresh()},b=()=>{l.galleryList.innerHTML=""},x=()=>{l.loader.classList.add("is-active")},S=()=>{l.loader.classList.remove("is-active")},c={searchForm:document.querySelector(".js-submit-form")},$=o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(b(),!t){n.warning({message:"You forgot to type what you are looking for!",position:"topRight",color:"#FFCE1B",maxWidth:"432px",messageColor:"#ffffff"});return}x(),y(t).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"});return}L(s.hits)}).catch(s=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"}),console.log(s.message)}).finally(()=>{S(),c.searchForm.reset()})};c.searchForm.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
