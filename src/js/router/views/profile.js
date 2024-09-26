import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "../../api/post/read";
import { getUsername } from "../../utilities/localStorage";
import { readProfile } from "../../api/profile/read";

authGuard();

const username = getUsername();

let profileInfo = document.querySelector(".profileInfo");
profileInfo.innerHTML = await readProfile(username);

let displayPost = await readPostsByUser(username);
console.log(displayPost);

let displayProfile = await readProfile(username);
console.log(displayProfile);
