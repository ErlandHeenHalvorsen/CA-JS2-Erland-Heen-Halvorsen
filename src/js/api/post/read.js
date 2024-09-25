import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS } from "../../api/constants.js";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(res.message);
    }
    let res = await response.json();

    let html = "";
    res.data.map((post) => {
      html += `
        <div class="post">
          <h2>${post.title}</h2>
          <img class ="post-image" src="${
            post.media ? post.media.url : ""
          }" alt="${post.title ? post.title : ""}" />
        </div>
        `;
    });
    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
