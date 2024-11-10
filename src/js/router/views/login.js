import { onLogin } from "../../ui/auth/login";
import NavBar from "../../ui/global/navBar.js";
import FooterSection from "../../ui/global/footer.js";

customElements.define("nav-bar", NavBar);
customElements.define("footer-section", FooterSection);

const form = document.forms.login;

form.addEventListener("submit", onLogin);
