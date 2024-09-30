import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../../api/constants.js";
import { getUsername } from "../../utilities/localStorage.js";

/**
 * Reads a post with the given ID.
 *
 * @param {string} id The ID of the post to read.
 *
 * @returns {Promise<Object>} Resolves with the post on success, or rejects with an error on failure.
 */
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
    let post = res.data;

    return post;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

/**
 * Reads a list of posts from the API.
 *
 * @param {number} [limit=12] The number of posts to fetch.
 * @param {number} [page=1] The page of posts to fetch.
 * @param {string} [tag] The tag for which to fetch posts.
 *
 * @returns {Promise<string>} Resolves with a string of HTML for the posts on success, or rejects with an error on failure.
 */
export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(
      `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}&_author=true&_reactions=true&_comments=true`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    if (!response.ok) {
      throw new Error(res.message);
    }
    let res = await response.json();

    let html = "";
    res.data.map((post) => {
      html += `
        <div class="postCard">
          <a href="/post/single-post/?id=${
            post.id
          }" class="postTitleLink"> <h2>${post.title}</h2></a>
          <p>${post.author.name}</p>
           ${
             post.media && post.media.url
               ? `<img class="post-image" src="${post.media.url}" alt="${
                   post.media.alt ? post.media.alt : ""
                 }" />`
               : ""
           }
          <span>${post.tags ? post.tags : ""}</span>
        </div>
        `;
    });
    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  try {
    const response = await fetch(
      `${API_SOCIAL_PROFILES}/${username}/posts?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    if (!response.ok) {
      throw new Error(res.message);
    }

    let res = await response.json();

    let html = "";
    res.data.map((post) => {
      html += `
        <div class="post" >
          <a href="/post/single-post/?id=${
            post.id
          }" class="postTitleLink"> <h2>${post.title}</h2></a>
          <p>${getUsername()}</p>
           ${
             post.media && post.media.url
               ? `<img class="post-image" src="${post.media.url}" alt="${
                   post.media.alt ? post.media.alt : ""
                 }" />`
               : ""
           }
          <span>${post.tags ? post.tags : ""}</span>
          <button class="deletePost" data-id="${post.id}">Delete</button>
          <button class="editPost" data-id="${post.id}">Edit</button>
        </div>
        `;
    });
    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}
