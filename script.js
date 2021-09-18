const mobile_btn = document.getElementById(".mobile-menu-exit");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById(".mobile-menu-exit");

mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});
