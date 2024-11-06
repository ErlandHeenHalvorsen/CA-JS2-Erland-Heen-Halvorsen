export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
export function authCheck() {
  if (!localStorage.token) {
    return false;
  }
  return true;
}
