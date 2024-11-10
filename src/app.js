import "./css/style.css";

import router from "./js/router";
import NavBar from "./js/ui/global/navBar.js";
import FooterSection from "./js/ui/global/footer.js";

await router(window.location.pathname);

customElements.define("nav-bar", NavBar);
customElements.define("footer-section", FooterSection);
