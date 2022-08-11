const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".nav");
const listItem = document.querySelectorAll(".list-item");
const hambMenu = document.querySelector(".hamb-menu");



openBtn.addEventListener("click", () => {
    menu.classList.add("open-menu");
    openBtn.classList.add("open-active");
    closeBtn.classList.add("close-active");
    hambMenu.classList.add("hamb-menu-active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("open-menu");
    openBtn.classList.remove("open-active");
    closeBtn.classList.remove("close-active");
    hambMenu.classList.remove("hamb-menu-active");
});