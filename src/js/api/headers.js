import { API_KEY } from "./constants";

/**
 * Creates a new Headers object with the Content-Type set to application/json.
 *
 * If the API_KEY is set, it is added to the headers as "X-Noroff-API-Key".
 *
 * If the user is logged in, the Authorization header is set to "Bearer <token>".
 *
 * @returns {Headers} a new Headers object
 */
export function headers() {
  const headers = new Headers();

  headers.append("content-type", "application/json");

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  const token = localStorage.getItem("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  return headers;
}
