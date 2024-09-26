import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "../../api/post/read";
import { getUsername } from "../../utilities/localStorage";
import { readProfile } from "../../api/profile/read";
import { deletePost } from "../../api/post/delete";

authGuard();

const username = getUsername();

let profileInfo = document.querySelector(".profileInfo");
let profilePosts = document.querySelector(".profilePosts");
profileInfo.innerHTML = await readProfile(username);
profilePosts.innerHTML = await readPostsByUser(username);

let deleteBtn = document.querySelectorAll(".deletePost");
let editBtn = document.querySelectorAll(".editPost");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    deletePost(id);

    let parentElement = e.target.nextSibling.parentElement;
    parentElement.remove();
  });
});

editBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    window.location.href = `/post/edit/?id=${id}`;
  });
});
