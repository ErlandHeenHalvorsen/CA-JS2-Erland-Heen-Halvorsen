import { onLogout } from "../../ui/auth/logout";

const logoutBtn = document.querySelector(".logout");

export function setLogoutListener() {
  logoutBtn.addEventListener(
    "click",
    () => onLogout() || window.location.reload()
  );
}
