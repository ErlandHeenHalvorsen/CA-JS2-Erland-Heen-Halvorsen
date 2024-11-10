import { readPost } from "../../api/post/read.js";
import { authGuard } from "../../utilities/authGuard.js";
import { getUsername } from "../../utilities/localStorage.js";

authGuard();
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const author = params.get("author");

async function renderPost() {
  const singlePost = document.querySelector("#singlePost");
  const post = await readPost(id, author);
  let html = `
           <div class="flex flex-col p-1 m-6 rounded-md md:m-4 w-full max-w-md h-fit bg-gray-800 border border-gray-400 shadow-lg">
                <a href="/post/single-post/?id=${post.id}" class="">
                    <div>
                        <div>
                        ${
                          post.media && post.media.url
                            ? `<img class="object-cover w-full aspect-[4/3] rounded-t-lg h-84 md:h-96" src="${post.media.url}" alt="${
                                post.media.alt ? post.media.alt : ""
                              }" />`
                            : `<img class="object-contain w-full aspect-[4/3] rounded-t-lg h-96" src="/public/images/noroff-logo.png" alt="Random image" />`
                        }
                        </div>
                        <div class="text-2xl my-2 first-letter:capitalize">
                            <h2 class="font-bold truncate">${post.title}</h2>  
                        </div>
                        <div class="flex flex-col">
                            <p>${post.author.name ? post.author.name : ""}</p>
                            <span class="bg-gray-600 px-1 rounded-sm  w-fit truncate">${post.tags ? post.tags : ""}</span>
                        </div>
                        <div class="flex flex-wrap">
                            <p>${post.body ? post.body : ""}</p>
                    </div>
                </a>
            </div>
          `;
  singlePost.innerHTML = html;
}
renderPost();
