import { headers } from "../../api/headers";
import { API_SOCIAL_POSTS } from "../../api/constants";
export async function createPost({ title, body, tags, media }) {
  const data = {
    title: title,
    body: body,
    tags: tags,
    media: {
      url: media.url,
      alt: media.alt,
    },
  };

  try {
    let result = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      throw new Error(result.message);
    }

    res = await result.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(`Response status: ${res.status}: ${res.statusText} `);
  }
}
