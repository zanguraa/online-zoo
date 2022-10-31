const burgerMenuIcon = document.querySelector(".burger-menu-icon");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenuIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("turn-on");
});
