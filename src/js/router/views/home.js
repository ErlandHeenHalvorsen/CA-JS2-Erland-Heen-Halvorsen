import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read.js";
authGuard();

async function renderPosts() {
  const post = document.querySelector(".posts");
  post.innerHTML = await readPosts();
}
renderPosts();
console.log(renderPosts());
