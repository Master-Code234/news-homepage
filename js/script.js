const toggleBtn = document.querySelector(".header__toggle");
const closeBtn = document.querySelector(".header__close");
const nav = document.querySelector(".header__nav");

// Open menu
toggleBtn.addEventListener("click", () => {
    nav.classList.add("open");
});

// Close menu
closeBtn.addEventListener("click", () => {
    nav.classList.remove("open");
});