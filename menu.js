const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  console.log("Burger clicked");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Link clicked");
    burger.classList.remove("active");
    menu.classList.remove("active");
    nav.classList.remove("active");
  });
});
