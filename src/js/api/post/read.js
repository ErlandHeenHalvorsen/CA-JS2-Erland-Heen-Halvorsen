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
      <a href="/post/single-post/?id=${post.id}" class="flex flex-col p-1 m-6 md:m-4 w-full max-w-md h-fit bg-gray-500 border border-gray-400 shadow-lg rounded-md hover:bg-gray-400 hover:scale-105 transition-all duration-200">  
          <container class="">
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
              <p>${post.author.name}</p>
              <span class="bg-gray-600 px-1 rounded-sm  w-fit truncate">${post.tags && post.tags.length ? post.tags : `No Tags`}</span>
            </div>
          
          </container>
      </a>
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
            <div class="flex flex-col p-1 m-6 rounded-md md:m-4 w-full max-w-md h-fit bg-gray-500 border border-gray-400 shadow-lg">
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
                            <p>${getUsername()}</p>
                            <span class="bg-gray-600 px-1 rounded-sm  w-fit truncate">${post.tags ? post.tags : ""}</span>
                        </div>
                    </div>
                </a>
                <div class="flex mt-4">
                  <button id="deletePost" class="cta-custom" data-id="${post.id}">Delete</button>
                  <button id="editPost" class="cta-custom" data-id="${post.id}">Edit</button>
                </div>
            </div>
        `;
    });
    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}
