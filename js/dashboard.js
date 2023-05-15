const nav_bar = document.querySelector(".navbar");
const menu_btn = document.querySelector(".menu_btn");
const page_content = document.querySelector(".container");


function openMenu() {
    nav_bar.style.width = "200px";
    menu_btn.style.width = "0";
    page_content.style.marginLeft = "200px"
    document.body.style.background = "rgba(0,0,0,0.4)";
}

function closeMenu() {
    nav_bar.removeAttribute("style");
    menu_btn.removeAttribute("style");
    page_content.removeAttribute("style");
    document.body.removeAttribute("style");
}

//remove all inline css when browser width >= 1024px
window.addEventListener('resize', function (event) {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMenu();
    }
}, true);
