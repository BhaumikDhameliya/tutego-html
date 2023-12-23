const hamburgerButton = document.getElementById("hamburger-icon-button");
const navMenu = document.getElementById("nav-menu");
hamburgerButton?.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
