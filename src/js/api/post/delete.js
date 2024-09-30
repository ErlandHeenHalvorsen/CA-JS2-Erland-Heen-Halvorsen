import { headers } from "../headers";
import { API_SOCIAL_POSTS } from "../constants";


/**
 * Deletes a post with the given ID.
 *
 * @param {string} id The ID of the post to delete.
 *
 * @returns {Promise<boolean>} Resolves with true if the post was deleted, or
 * false if the post was not found. Rejects with an error if the request fails.
 */
export async function deletePost(id) {
  try {
    const result = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
      headers: headers(),
    });

    if (!result.ok) {
      throw new Error(result.status);
    }
    if (result.status === 204) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}
