import { API_KEY } from "../constants.js";
import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

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
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(`Response status: ${error.status}: ${error.statusText} `);
  }
}
