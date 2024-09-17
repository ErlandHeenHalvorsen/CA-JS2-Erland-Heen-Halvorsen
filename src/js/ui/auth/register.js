import { register } from "../../api/auth/register";
import { checkEmail, checkPassword } from "./login";
console.log("Hello from Register.js");

export async function onRegister(event) {
  event.preventDefault();

  console.log(event.target);
  const name = event.target[0].value;
  const email = event.target[1].value;
  const password = event.target[2].value;

  const emailValid = checkEmail(email);
  const passwordValid = checkPassword(password);

  if (emailValid == false || passwordValid == false) {
    return;
  }

  let result = await register({ name, email, password });

  console.log(result.data);
}
