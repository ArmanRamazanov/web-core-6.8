const clr_green_500 = "#B8FFEC";
const clr_green_900 = "#41F6D7";
const clr_grey_900 = "#7E7E82";
const clr_black_900 = "#1B1C21";
const header__hamburger_menu = document.querySelector(".header__hamburger-menu");
const header__hamburger_button = document.querySelector(".header__hamburger-button");
const header__hamburger_menu_button = document.querySelector(".header__hamburger-menu-button");
const header__hamburger_menu_navigation_list_links = document.querySelectorAll(".header__hamburger-menu-navigation-list-link");
const header__hamburger_menu_lang_buttons = document.querySelectorAll(".header__hamburger-menu-lang-button");

function removeShadow(elements){
    elements.forEach(element=>{
        element.style.boxShadow = "none"
        element.parentElement.style.boxShadow = "none"
    })
}

function removeColor(elements){
    elements.forEach(element=>{
        element.style.color = clr_black_900 
    })
}

header__hamburger_button.addEventListener("click",()=>{
    header__hamburger_menu.classList.toggle("is-active");
})

header__hamburger_menu_button.addEventListener("click",()=>{
    header__hamburger_menu.classList.toggle("is-active");
})


//Active Links
function activeLinkShadow(link){
    removeShadow(header__hamburger_menu_navigation_list_links)
    removeColor(header__hamburger_menu_navigation_list_links)
    link.style.boxShadow  = `5px 0 1px -2px ${clr_green_900} inset`
    link.style.color = clr_grey_900
}

const links_active = header__hamburger_menu_navigation_list_links.forEach((link)=>{
    link.addEventListener("click",event=>{
        activeLinkShadow(event.target)
    })

    link.addEventListener("keypress", event=>{
        if(event.key=" "){
            activeLinkShadow(event.target)
        }
    })})

links_active

//Changing the language of the page
header__hamburger_menu_lang_buttons.forEach((button)=>{
    button.addEventListener("click", event=>{
        removeColor(header__hamburger_menu_lang_buttons);

        let langButton = event.target;

        langButton.style.color =  clr_grey_900;
    })
})










