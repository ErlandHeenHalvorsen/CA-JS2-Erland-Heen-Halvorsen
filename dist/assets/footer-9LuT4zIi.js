function i(){localStorage.token||(alert("You must be logged in to view this page"),window.location.href="/auth/login/")}function n(){return!!localStorage.token}function l(e){localStorage.setItem("username",e)}function a(){return localStorage.getItem("username")}function r(){localStorage.removeItem("token"),localStorage.removeItem("username")}class c extends HTMLElement{constructor(){super(),this.classList.add("block"),this.isLoggedIn=n()}connectedCallback(){this.render(),this.listeners(),console.log(this.isLoggedIn)}listeners(){const t=this.querySelector("#mobile-menu");this.addEventListener("click",s=>{if(s.target.id==="logout")r(),window.location.reload();else if(s.target.id==="menu-btn"){t.classList.toggle("hidden");const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o)}})}loggedInMenu(){return` 
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
    `}}class d extends HTMLElement{constructor(){super(),this.classList.add("block"),this.getUsername=a()}connectedCallback(){this.render()}render(){this.innerHTML=`
        <footer class="bg-gray-800 border-t border-gray-700 p-4 mt-4 text-center flex justify-between">
            <div>
                <p class="text-white">Noroff &copy; 2021</p>
            </div>
            <div>
                <p>${this.getUsername?this.getUsername:""}</p>
            </div>
     </footer>
        `}}export{d as F,c as N,i as a,a as g,l as s};
