/*abre e fecha menu lateral no modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body'); 

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.remove("bi-x", "bi-list")
    body.classList.toggle("menu-nav-active");
});

const navItem = document.querySelectorAll('.nav-item');