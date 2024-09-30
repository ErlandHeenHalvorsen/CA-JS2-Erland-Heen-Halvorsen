import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Updates a post with the given body object.
 *
 * @param {string} id The id of the post to update.
 * @param {Object} bodyObj The body object containing the updated post data.
 *
 * @returns {Promise<Object>} Resolves with the updated post object on success,
 * or rejects with an error on failure.
 */
export async function updatePost(id, bodyObj) {
  try {
    const result = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(bodyObj),
    });

    if (!result.ok) {
      throw new Error(result.status);
    }
    const res = await result.json();
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}
