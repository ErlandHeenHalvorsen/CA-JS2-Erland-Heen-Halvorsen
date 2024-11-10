import { getUsername } from "../../utilities/localStorage";

export default class FooterSection extends HTMLElement {
  constructor() {
    super();
    this.classList.add("block");
    this.getUsername = getUsername();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <footer class="bg-gray-800 border-t border-gray-700 p-4 mt-4 text-center flex justify-between">
            <div>
                <p class="text-white">Noroff &copy; 2021</p>
            </div>
            <div>
                <p>${this.getUsername ? this.getUsername : ""}</p>
            </div>
     </footer>
        `;
  }
}
