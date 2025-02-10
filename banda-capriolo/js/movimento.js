document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("main-navbar");
    const header = navbar.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY > header) {
            navbar.classList.add("fixed-top");
            navbar.classList.remove("sticky-top");
        } else {
            navbar.classList.remove("fixed-top");
            navbar.classList.add("sticky-top");
        }
    });
});
