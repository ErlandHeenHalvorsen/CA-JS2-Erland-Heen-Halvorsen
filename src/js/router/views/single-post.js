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
            ${
              post.media && post.media.url
                ? `<img class="post-image" src="${post.media.url}" alt="${
                    post.media.alt ? post.media.alt : ""
                  }" />`
                : ""
            }
            <p>${post.body ? post.body : ""}</p>
            <span>${post.tags ? post.tags : ""}</span>
          </div>
          `;
  singlePost.innerHTML = html;
}
renderPost();
