import { API_KEY } from "../constants";
import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

export async function register({ name, email, password, bio, banner, avatar }) {
  const head = headers();
  const data = {
    name: name,
    email: email,
    password: password,
    bio: bio,
    banner: banner,
    avatar: avatar,
  };
  head.append("content-type", "application/json");
  try {
    let result = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: head,
      body: JSON.stringify(data),
    });
    if (!result.ok) {
      throw new Error(result.message);
    }
    result = await result.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(`Response status: ${result.status}: ${result.statusText} `);
  }
}
