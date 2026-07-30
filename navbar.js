document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector("nav ul");

    if (menuBtn && navUl) {
        menuBtn.addEventListener("click", () => {
            navUl.classList.toggle("show");
        });
    }

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light");
            themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
        });
    }
});
