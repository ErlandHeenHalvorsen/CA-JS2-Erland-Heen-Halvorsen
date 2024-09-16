import { register } from "../../api/auth/register";

export async function onRegister(event) {
  event.preventDefault();
  console.log(event.target);
}
