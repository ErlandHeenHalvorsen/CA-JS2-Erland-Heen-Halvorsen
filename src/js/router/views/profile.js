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

/* document.querySelector(".deletePost").addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  //deletePost(id);
  console.log(e.target.nextSibling.parentElement);
  let parentElement = e.target.nextSibling.parentElement;
  parentElement.remove();
}); */

document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    deletePost(id);
    console.log("Button clicked!");
    let parentElement = e.target.nextSibling.parentElement;
    parentElement.remove();
  }
});
