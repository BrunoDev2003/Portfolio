import { translations } from "./translations.json";

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

console.log(navItem);

navItem.forEach(item =>{
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active"))
        body.classList.remove("menu-nav-active");
        menuMobile.classList.replace("bi-x", "bi-list");
    })
})

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;
    item.forEach((element) => {
        if (windowTop> element.OffsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})

let currentLang = "PT"; //idioma padrão da pag.

const switchLanguage = (lang) => {
    currentLang = currentLang === "PT" ? "EN" : "PT"; //alterna entre os idiomas

    //Atualiza o texto da página com as traduções correspondentes
    document.getElementById("subtitle").innerHTML = translations[currentLang].subtitle;
    document.getElementById("sobre").innerHTML = translations[currentLang].sobre;
}