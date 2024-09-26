export function setLocalstorage(key, value) {
  localStorage.setItem(key, value);
}

export function setUsername(username) {
  localStorage.setItem("username", username);
}

export function getUsername() {
  return localStorage.getItem("username");
}
