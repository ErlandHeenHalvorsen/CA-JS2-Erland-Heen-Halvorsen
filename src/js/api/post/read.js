import { headers } from "../../api/headers.js";
import { API_SOCIAL_POSTS } from "../../api/constants.js";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    let res = await response.json();
    console.log(res.data);

    if (!response.ok) {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
