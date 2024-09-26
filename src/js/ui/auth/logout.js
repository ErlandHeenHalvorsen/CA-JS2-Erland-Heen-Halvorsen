export function onLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  console.log("logging out");
}
