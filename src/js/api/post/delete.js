import { headers } from "../headers";
import { API_SOCIAL_POSTS } from "../constants";

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
