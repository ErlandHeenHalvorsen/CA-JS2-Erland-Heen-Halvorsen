import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read.js";
import { setLogoutListener } from "../../ui/global/logout.js";
import { toggleMenu } from "../../ui/global/toggleMenu.js";
authGuard();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function renderPosts() {
  const post = document.getElementById("posts");
  post.innerHTML = await readPosts();
}
renderPosts();

toggleMenu();

setLogoutListener();
