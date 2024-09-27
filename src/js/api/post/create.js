import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS } from "../../api/constants.js";

/**
 * Creates a post with the given body.
 *
 * @param {Object} createBody Contains the required information to create a post, made in src/js/ui/post/create .
 * @param {string} createBody.title Sets title of post, this is required.
 * @param {string} createBody.body sets body of post.
 * @param {object} [createBody.media] sets media of post.
 * @param {string} createBody.media.url sets url of media.
 * @param {string} createBody.media.alt sets alt of media.
 * @param {string[]} createBody.tags sets tags of post.
 * @returns {Promise<Object>} Resolves with the created post on success, or rejects with an error on failure.
 */
export async function createPost(createBody) {
  try {
    const result = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(createBody),
    });
    console.log(result);
    if (!result.ok) {
      throw new Error(result.status);
    }

    const res = await result.json();

    return res.data;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}
