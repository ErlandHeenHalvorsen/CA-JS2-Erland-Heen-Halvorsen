import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS } from "../../api/constants.js";
import { getIdFromUrl } from "../../api/constants.js";

const id = getIdFromUrl();

export async function readPost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "GET",
      headers: headers(),
    });
    if (!response.ok) {
      throw new Error(res.message);
    }
    let res = await response.json();
    return res.data;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

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
          <a href="/post/single-post/?id=${
            post.id
          }" class="postButton>Read More</a>
        </div>
        `;
    });
    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
