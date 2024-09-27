import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../../api/constants.js";
import { getUsername } from "../../utilities/localStorage.js";

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
    console.log(post);

    return post;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

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
          <img class ="post-image" src="${
            post.media ? post.media.url : ""
          }" alt="${post.title ? post.title : ""}" />
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
    console.log(res.data);
    let html = "";
    res.data.map((post) => {
      html += `
        <div class="post" >
          <a href="/post/single-post/?id=${
            post.id
          }" class="postTitleLink"> <h2>${post.title}</h2></a>
          <p>${getUsername()}</p>
          <img class ="post-image" src="${
            post.media ? post.media.url : ""
          }" alt="${post.title ? post.title : ""}" />
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
