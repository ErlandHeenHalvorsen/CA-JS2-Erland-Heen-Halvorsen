import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

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
