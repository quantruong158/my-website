const menu = document.querySelector(".dropdown-menu");
const nav = document.querySelector(".nav-container");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
