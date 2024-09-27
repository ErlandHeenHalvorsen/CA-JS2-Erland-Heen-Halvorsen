import { API_KEY } from "../constants";
import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} data Contains an email and password to log in with.
 * @param {string} data.email The email to log in with.
 * @param {string} data.password The password to log in with.
 *
 * @returns {Promise<Object>} Resolves with the login response on success, or rejects with an error on failure.
 */
export async function fetchLogin({ email, password }) {
  const data = {
    email: email,
    password: password,
  };

  try {
    let result = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      throw new Error(result.message);
    }
    result = await result.json();
    return result;
  } catch (error) {
    console.error(`Response status: ${result.status}: ${result.statusText} `);
  }
}
