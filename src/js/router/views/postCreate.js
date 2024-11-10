import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import NavBar from "../../ui/global/navBar.js";
import FooterSection from "../../ui/global/footer.js";

customElements.define("nav-bar", NavBar);
customElements.define("footer-section", FooterSection);

authGuard();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
