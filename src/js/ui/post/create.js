import { createPost } from "../../api/post/create.js";

export async function onCreatePost(event) {
  event.preventDefault();

  const title = document.querySelector("#title")?.value;
  const body = document.querySelector("#body")?.value;
  const tags = document.querySelector("#tags")?.value;
  const mediaUrl = document.querySelector("#media")?.value;
  const mediaAlt = document.querySelector("#mediaAlt")?.value;
  const tagsArray = tags ? tags.split(",") : [];

  /// Koden sjekker etter elementer, og hvis den ikke finner setter den undefined.
  /// Prøvde andre metoder, men api'et ga meg 400 på body.
  const createBody = {
    title,
    ...(body && { body }),
    ...(tagsArray.length > 0 && { tags: tagsArray }),
    ...(mediaUrl && {
      media: { url: mediaUrl, ...(mediaAlt && { alt: mediaAlt }) },
    }),
  };

  try {
    const post = await createPost(createBody);
    if (!post) {
      throw new Error("Post not created");
    } else {
      console.log(post);
      alert("Post created!");
    }
  } catch (error) {
    console.error("error creating post", error);
  }
}
