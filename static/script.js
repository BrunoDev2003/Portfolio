

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
let translations = {}; //objeto para armazenar as traduções.

async function loadTranslations() {
    try {
        const response = await fetch('/static/translations.json'); //carrega o arquivo JSON com as traduções
        translations = await response.json(); //converte o JSON em objeto JavaScript
    } catch (error) {
        console.error('Erro ao carregar as traduções:', error); //exibe erro no console
    }
    
    }; 

async function switchLanguage() {
    if (Object.keys(translations).length === 0) { //verifica se as traduções foram carregadas
        console.error("as traduções não foram carregadas.")//carrega as traduções se não foram carregadas
        return;
    }
    currentLang = currentLang === "PT" ? "EN" : "PT"; //alterna entre os idiomas
    
    /*if(!translations[currentLang]) { //verifica se as traduções já foram carregadas
        console.error('Traduções não carregadas.'); //exibe erro no console
        return; //retorna se não houver traduções
    }*/

    const elementsToUpdate = [
        "lang-btn",
        "subtitle",
        "sobre",
        "arraste",
        "col-md-8_h3",
        "bacharel",
        "list-group-item",
        "birthday",
        "list-group-item-age",
        "cidade",   
        "estado",
        "list-group-item-universidade",
        "span-universidade",
        "historico",
        "habilidades",
        "curriculo",
        "educacao",
        "curso",
        "ano",
        "uni",
        "descricao-curso",
        "robotica",
        "happycode",
        "sobre-robotica",
        "experiencia",
        "estagio",
        "tempo",
        "estagio-descr",
        "prof",
        "prof-descr",
        "contato",
        "local"
    ];

    elementsToUpdate.forEach((id) => {
        const element = document.getElementById(id); //seleciona o elemento pelo ID
        if (element) {
            element.innerHTML = translations[currentLang][id]; //atualiza o conteúdo do elemento com a tradução correspondente
        } else {
            console.warn(`Elemento com ID "${id}" não encontrado.`); //exibe erro no console se o elemento não for encontrado
        }
    });
    } 

    //Inicializa troca de idiomas apenas após carregar as traduções
    async function init() {
        await loadTranslations(); //carrega as traduções
        if (Object.keys(translations).length === 0) { //verifica se as traduções foram carregadas
        console.error("as traduções não foram carregadas.")//carrega as traduções se não foram carregadas
        return;
        }
        document.getElementById("lang-btn").addEventListener("click", switchLanguage); //adiciona evento de clique ao botão de idioma
    }
    init(); //chama a função de inicialização

/*
        //Atualiza o texto da página com as traduções correspondentes
        document.getElementById("lang-btn").innerHTML = translations[currentLang]["lang-btn"];
        document.getElementById("subtitle").innerHTML = translations[currentLang].subtitle;
        document.getElementById("sobre").innerHTML = translations[currentLang].sobre;
        document.getElementById("arraste").innerHTML = translations[currentLang].arraste;
        document.getElementById("col-md-8_h3").innerHTML = translations[currentLang]["col-md-8_h3"];
        document.getElementById("bacharel").innerHTML = translations[currentLang].bacharel;
        document.getElementById("list-group-item").innerHTML = translations[currentLang]["list-group-item"];
        document.getElementById("birthday").innerHTML = translations[currentLang]["birthday"];
        document.getElementById("list-group-item-age").innerHTML = translations[currentLang]["list-group-item-age"];
        document.getElementById("cidade").innerHTML = translations[currentLang].cidade;
        document.getElementById("estado").innerHTML = translations[currentLang].estado;
        document.getElementById("list-group-item-universidade").innerHTML = translations[currentLang]["list-group-item-universidade"];
        document.getElementById("span-universidade").innerHTML = translations[currentLang]["span-universidade"];
        document.getElementById("historico").innerHTML = translations[currentLang].historico;
        document.getElementById("habilidades").innerHTML = translations[currentLang].habilidades;
        document.getElementById("curriculo").innerHTML = translations[currentLang].curriculo;
        document.getElementById("educacao").innerHTML = translations[currentLang].educacao;
        document.getElementById("curso").innerHTML = translations[currentLang].curso;
        document.getElementById("ano").innerHTML = translations[currentLang].ano;
        document.getElementById("uni").innerHTML = translations[currentLang].uni;
        document.getElementById("descricao-curso").innerHTML = translations[currentLang]["descricao-curso"];
        document.getElementById("robotica").innerHTML = translations[currentLang].robotica;
        document.getElementById("happycode").innerHTML = translations[currentLang].happycode;
        document.getElementById("sobre-robotica").innerHTML = translations[currentLang]["sobre-robotica"];
        document.getElementById("experiencia").innerHTML = translations[currentLang].experiencia;
        document.getElementById("estagio").innerHTML = translations[currentLang].estagio;
        document.getElementById("tempo").innerHTML = translations[currentLang].tempo;
        document.getElementById("estagio_descr").innerHTML = translations[currentLang]["estagio-descr"];
        document.getElementById("prof").innerHTML = translations[currentLang].prof;
        document.getElementById("prof_descr").innerHTML = translations[currentLang]["prof-descr"];
        document.getElementById("contato").innerHTML = translations[currentLang].contato;
        document.getElementById("local").innerHTML = translations[currentLang].local;
    }
    const languageButton = document.getElementById("lang-btn"); //botão de idioma
    languageButton.addEventListener("click", switchLanguage); //adiciona evento de clique ao botão de idioma
    */