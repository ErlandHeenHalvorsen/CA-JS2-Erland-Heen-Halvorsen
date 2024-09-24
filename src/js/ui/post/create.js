import { createPost } from "../../api/post/create";
console.log("hello from createPost");

document.getElementById("createPost");
export async function onCreatePost(event) {
  event.preventDefault();

  const title = event.target[0].value;
  const body = event.target[1].value;
  const tags = event.target[2].value.split(",");
  const media = event.target[3].value;
  const mediaAlt = event.target[4].value;

  console.log(event, title, body, tags, media, mediaAlt);

  let result = await createPost({ title, body, tags, media, mediaAlt });
  console.log(result);
  return result;
}
