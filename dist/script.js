// NAVBAR FIXED
window.onscroll = function () {
  const navbar = document.querySelector("header");
  const fixednav = navbar.offsetTop;

  if (window.pageYOffset > fixednav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

// MENU
const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  navMenu.classList.toggle("hidden");
});
