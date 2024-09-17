import { API_KEY } from "../constants";
import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

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
