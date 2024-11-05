const menuIcon = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
export function toggleMenu() {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  const expanded = mobileMenu.getAttribute("aria-expanded") === "true" || false;
  mobileMenu.setAttribute("aria-expanded", !expanded);
}
