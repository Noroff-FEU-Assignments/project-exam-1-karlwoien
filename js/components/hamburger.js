/* Hamburger menu inspired by Web Dev Tutorials: https://www.youtube.com/watch?v=flItyHiDm7E */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})