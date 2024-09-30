import { API_KEY } from "../constants.js";
import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

/**
 * Registers a user with name, email and password.
 *
 * @param {Object} data Contains the required information to register a user.
 * @param {string} data.name The name of the user to register.
 * @param {string} data.email The email of the user to register.
 * @param {string} data.password The password of the user to register.
 *
 * @returns {Promise<Object>} Resolves with the registration response on success, or rejects with an error on failure.
 */
export async function register({ name, email, password }) {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    let result = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      throw new Error(result.message);
    }

    result = await result.json();

    return result.data;
  } catch (error) {
    console.error(`Response status: ${error.status}: ${error.statusText} `);
  }
}
