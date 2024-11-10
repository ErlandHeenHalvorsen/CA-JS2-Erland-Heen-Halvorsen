import { onLogout } from "../auth/logout.js";
import { authCheck } from "../../utilities/authGuard";
export default class NavBar extends HTMLElement {
  constructor() {
    super();
    this.classList.add("block");
    this.isLoggedIn = authCheck();
  }
  connectedCallback() {
    this.render();
    this.listeners();
    console.log(this.isLoggedIn);
  }
  listeners() {
    const mobileMenu = this.querySelector("#mobile-menu");

    this.addEventListener("click", (e) => {
      if (e.target.id === "logout") {
        onLogout();
        window.location.reload();
      } else if (e.target.id === "menu-btn") {
        mobileMenu.classList.toggle("hidden");

        const expanded =
          mobileMenu.getAttribute("aria-expanded") === "true" || false;
        mobileMenu.setAttribute("aria-expanded", !expanded);
      }
    });
  }
  loggedInMenu() {
    return ` 
      <a class="custom-nav" href="/">Home</a>
      <a class="custom-nav" href="/profile/">Profile</a>
      <a class="custom-nav" href="/post/create/">Post</a>
      <button title="Logout" id="logout" class="cta-custom">
        Logout
      </button>
      `;
  }
  loggedOutMenu() {
    return `
        <a class="custom-nav" href="/">Home</a>
        <a class="cta-custom" href="/auth/login/">Login</a>
        <a class="register-custom" href="/auth/register/">Register</a>
            
    `;
  }
  render() {
    this.innerHTML = `
    
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
            ${this.isLoggedIn ? this.loggedInMenu() : this.loggedOutMenu()}
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
            ${this.isLoggedIn ? this.loggedInMenu() : this.loggedOutMenu()}
        </nav>
      </div>
    </header>
    `;
  }
}
