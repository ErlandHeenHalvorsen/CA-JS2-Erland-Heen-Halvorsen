import { readPost } from "../../api/post/read.js";
import { authGuard } from "../../utilities/authGuard.js";

authGuard();
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function renderPost() {
  const singlePost = document.querySelector(".singlePost");
  const post = await readPost(id);
  let html = `
          <div class="post">
            <h2>${post.title}</h2>
            <img class ="post-image" src="${
              post.media ? post.media.url : ""
            }" alt="${post.title ? post.title : ""}" />
            <p>${post.body ? post.body : ""}</p>
            <span>${post.tags ? post.tags : ""}</span>
          </div>
          `;
  singlePost.innerHTML = html;
}
renderPost();
