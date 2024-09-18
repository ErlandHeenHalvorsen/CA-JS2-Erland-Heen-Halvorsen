import { createPost } from "../../api/post/create";
console.log("hello from createPost");

document.getElementById("createPost");
export async function onCreatePost(event) {
  event.preventDefault();

  console.log(event);
}
