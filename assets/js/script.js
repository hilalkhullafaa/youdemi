/**
 * add eventListener on multiple elements
 */
const addEventOnElements = (elements, eventType, callback) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * Preloader
 */
const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", () => {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});

/**
 * Header active when scroll down to 100px
 */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Toggle Navbar for Mobile
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navToggler, "click", toggleNavbar);
