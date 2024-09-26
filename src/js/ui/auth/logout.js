export function onLogout() {
  localStorage.removeItem("token");
  console.log("logging out");
}
