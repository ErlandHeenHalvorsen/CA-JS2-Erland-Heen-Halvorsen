import { register } from "../../api/auth/register.js";
import { checkEmail, checkPassword } from "./login.js";
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

  let res = await register({ name, email, password });

  console.log(res);
}
