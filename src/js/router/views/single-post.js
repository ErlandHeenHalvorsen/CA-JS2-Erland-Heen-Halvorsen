import { readPost } from "../../api/post/read.js";
import { authGuard } from "../../utilities/authGuard.js";
console.log("Loading Page: /post/single-post");

authGuard();
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function renderPost() {
  const singlePost = document.querySelector(".singlePost");
  singlePost.innerHTML = await readPost(id);
}
renderPost();
