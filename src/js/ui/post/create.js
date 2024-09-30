import { createPost } from "../../api/post/create.js";

console.log("hello from createPost");

export async function onCreatePost(event) {
  event.preventDefault();
  

  const title = event.target[0]?.value;
  const body = event.target[1]?.value;
  const tags = event.target[2]?.value;
  const mediaUrl = event.target[3]?.value;
  const mediaAlt = event.target[4]?.value;
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
  console.log(createBody);

  try {
    const post = await createPost(createBody);
    if (!post) {
      throw new Error("Post not created");
    } else {
      console.log(post);
    }
  } catch (error) {
    console.error("error creating post", error);
  }
}
