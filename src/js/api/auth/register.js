import { API_KEY } from "../constants";
import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

export async function register({ name, email, password }) {
  const data = {
    name: name,
    email: email,
    password: password,
  };
  let result;
  let res;

  try {
    result = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      throw new Error(result.message);
    }

    res = await result.json();
    console.log(res.data);
    return res;
  } catch (error) {
    console.error(`Response status: ${result.status}: ${result.statusText} `);
  }
}
