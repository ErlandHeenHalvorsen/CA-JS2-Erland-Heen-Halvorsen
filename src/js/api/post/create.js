import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS } from "../../api/constants.js";

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
