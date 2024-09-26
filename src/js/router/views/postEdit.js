import { authGuard } from "../../utilities/authGuard";
import { updatePost } from "../../api/post/update";
import { readPost } from "../../api/post/read";
import { onUpdatePost } from "../../ui/post/update";

authGuard();
const id = new URLSearchParams(window.location.search).get("id");
const post = await readPost(id);

let editTitle = document.querySelector(".editTitle");
let editBody = document.querySelector(".editBody");
let editTags = document.querySelector(".editTags");
let editMedia = document.querySelector(".editMedia");
let editAlt = document.querySelector(".editAlt");
let formObject = {
  title: editTitle,
  body: editBody,
  tags: editTags,
  media: editMedia,
  alt: editAlt,
};
console.log(post);
if (post) {
  editTitle.value = post.title;
  editBody.value = post.body;
  editTags.value = post.tags;
  editMedia.value = post.media.url;
  editAlt.value = post.media.alt;
}

const form = document.forms.editPost;

form.addEventListener("submit", (event) => onUpdatePost(event, formObject, id));
