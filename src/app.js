import "./css/style.css";

import router from "./js/router";
import NavBar from "./js/ui/global/navBar.js";

await router(window.location.pathname);

customElements.define("nav-bar", NavBar);
