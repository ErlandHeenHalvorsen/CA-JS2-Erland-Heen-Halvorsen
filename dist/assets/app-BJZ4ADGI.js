const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-CXKVnGJj.js","./read-Cmqt6XaH.js","./headers-CvLIB_Db.js","./login-BBj12kkT.js","./login-OcZP_hDo.js","./register-Dsga1V2D.js","./single-post-DXS1ZoUN.js","./postEdit-xO0culJ7.js","./postCreate-Cukn4WA_.js","./profile-C8agCUws.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const v="modulepreload",_=function(s,o){return new URL(s,o).href},h={},n=function(o,l,u){let e=Promise.resolve();if(l&&l.length>0){const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),g=i?.nonce||i?.getAttribute("nonce");e=Promise.allSettled(l.map(a=>{if(a=_(a,u),a in h)return;h[a]=!0;const d=a.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!u)for(let m=r.length-1;m>=0;m--){const f=r[m];if(f.href===a&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":v,d||(c.as="script"),c.crossOrigin="",c.href=a,g&&c.setAttribute("nonce",g),document.head.appendChild(c),d)return new Promise((m,f)=>{c.addEventListener("load",m),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}function t(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return e.then(r=>{for(const i of r||[])i.status==="rejected"&&t(i.reason);return o().catch(t)})};async function b(s=window.location.pathname){switch(s){case"/":await n(()=>import("./home-CXKVnGJj.js"),__vite__mapDeps([0,1,2]),import.meta.url);break;case"/auth/":await n(()=>import("./auth-B9M9EqBC.js"),[],import.meta.url);break;case"/auth/login/":await n(()=>import("./login-BBj12kkT.js"),__vite__mapDeps([3,4,2]),import.meta.url);break;case"/auth/register/":await n(()=>import("./register-Dsga1V2D.js"),__vite__mapDeps([5,2,4]),import.meta.url);break;case"/post/":await n(()=>import("./post-z_hugWFp.js"),[],import.meta.url);break;case"/post/single-post/":await n(()=>import("./single-post-DXS1ZoUN.js"),__vite__mapDeps([6,1,2]),import.meta.url);break;case"/post/edit/":await n(()=>import("./postEdit-xO0culJ7.js"),__vite__mapDeps([7,1,2]),import.meta.url);break;case"/post/create/":await n(()=>import("./postCreate-Cukn4WA_.js"),__vite__mapDeps([8,2]),import.meta.url);break;case"/profile/":await n(()=>import("./profile-C8agCUws.js"),__vite__mapDeps([9,1,2]),import.meta.url);break;default:await n(()=>import("./notFound-BNXFWLKC.js"),[],import.meta.url)}}function w(){localStorage.removeItem("token"),localStorage.removeItem("username")}function P(){localStorage.token||(alert("You must be logged in to view this page"),window.location.href="/auth/login/")}function L(){return!!localStorage.token}class E extends HTMLElement{constructor(){super(),this.classList.add("block"),this.isLoggedIn=L()}connectedCallback(){this.render(),this.listeners(),console.log(this.isLoggedIn)}listeners(){const o=this.querySelector("#mobile-menu");this.addEventListener("click",l=>{if(l.target.id==="logout")w(),window.location.reload();else if(l.target.id==="menu-btn"){o.classList.toggle("hidden");const u=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!u)}})}loggedInMenu(){return` 
      <a class="custom-nav" href="/">Home</a>
      <a class="custom-nav" href="/profile/">Profile</a>
      <a class="custom-nav" href="/post/create/">Post</a>
      <button title="Logout" id="logout" class="cta-custom">
        Logout
      </button>
      `}loggedOutMenu(){return`
        <a class="custom-nav" href="/">Home</a>
        <a class="cta-custom" href="/auth/login/">Login</a>
        <a class="register-custom" href="/auth/register/">Register</a>
            
    `}render(){this.innerHTML=`
    
    <header class="bg-gray-800">
      <div
        class="container mx-auto flex justify-between items-center p-4 md:p-6 lg:p-8"
      >
        <div>
          <a class="hover:scale-105" href="/">
            <img src="/images/noroff-logo.png" alt="Noroff Logo" />
          </a>
        </div>
        <!-- Desktop Menu -->
        <div class="text-xl">
          <nav class="hidden md:block">
            ${this.isLoggedIn?this.loggedInMenu():this.loggedOutMenu()}
          </nav>
          <!-- SVG -->
          <div class="flex md:hidden">
            <button
              id="menu-btn"
              class="focus:outline-none p-1 m-0 ml-6"
              aria-label="toggle menu"
              aria-expanded="false"
            >
              <svg
                class="w-8 h-8 text-white pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="bg-gray-800 m-0 hidden md:hidden">
        <nav class="flex flex-col text-center space-y-2 p-4">
            ${this.isLoggedIn?this.loggedInMenu():this.loggedOutMenu()}
        </nav>
      </div>
    </header>
    `}}function x(s){localStorage.setItem("username",s)}function y(){return localStorage.getItem("username")}class k extends HTMLElement{constructor(){super(),this.classList.add("block"),this.getUsername=y()}connectedCallback(){this.render()}render(){this.innerHTML=`
        <footer class="bg-gray-800 border-t border-gray-700 p-4 mt-4 text-center flex justify-between">
            <div>
                <p class="text-white">Noroff &copy; 2021</p>
            </div>
            <div>
                <p>${this.getUsername?this.getUsername:""}</p>
            </div>
     </footer>
        `}}await b(window.location.pathname);customElements.define("nav-bar",E);customElements.define("footer-section",k);export{P as a,y as g,x as s};
