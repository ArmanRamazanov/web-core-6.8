//Wanted to have only one main__section-list-button remain active, while keeping the first one active as a default
const clr_green_500 = "#B8FFEC";
const clr_green_900 = "#41F6D7";
const clr_grey_900 = "#7E7E82";
const clr_black_900 = "#1B1C21"
const listButtons = document.querySelectorAll(".main__section-list-button");
const header__hamburger_menu = document.querySelector(".header__hamburger-menu");
const header__hamburger_button = document.querySelector(".header__hamburger-button");
const header__hamburger_menu_button = document.querySelector(".header__hamburger-menu-button");
const header__hamburger_menu_navigation_list_links = document.querySelectorAll(".header__hamburger-menu-navigation-list-link");
const header__hamburger_menu_lang_button = document.querySelectorAll(".header__hamburger-menu-lang-button");

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

listButtons.forEach((button)=>{
    button.addEventListener("click",event=>{
        removeShadow(listButtons);
        let clickedButton = event.target;
        clickedButton.style.boxShadow = `0 0 0px 3px ${clr_green_500} inset`
    })
})

header__hamburger_button.addEventListener("click",()=>{
    header__hamburger_menu.classList.toggle("is-active");
    const removeFocusOutsideMenu = (selector) =>{
        
    const focusableElements = selector.querySelectorAll("a,button")
    
    focusableElements.forEach((el)=>{
        el.setAttribute("tabindex", "-1")
    })}

    if(header__hamburger_menu.classList.contains("is-active")===true){
        removeFocusOutsideMenu(document.querySelector(".header"))
        removeFocusOutsideMenu(document.querySelector(".main"))
    }    
})

const removeTabIndex = () => {
    document.querySelectorAll('[tabindex="-1"]').forEach((element)=>{
        element.removeAttribute("tabindex")
    })
}

header__hamburger_menu_button.addEventListener("click",()=>{
    header__hamburger_menu.classList.toggle("is-active");
    removeTabIndex()
})

header__hamburger_menu_navigation_list_links.forEach((link)=>{
    link.addEventListener("click",event=>{
        removeShadow(header__hamburger_menu_navigation_list_links);
        removeColor(header__hamburger_menu_navigation_list_links);
        
        let clickedLink = event.target;

        clickedLink.style.boxShadow = `5px 0 1px -2px ${clr_green_900} inset`;
        clickedLink.style.color = clr_grey_900;
    })
})

header__hamburger_menu_navigation_list_links.forEach((link)=>{
    link.addEventListener("keypress", event=>{
        if(event.key=" "){
            removeShadow(header__hamburger_menu_navigation_list_links);
            removeColor(header__hamburger_menu_navigation_list_links);
            
            let clickedLink = event.target;
    
            clickedLink.style.boxShadow = `5px 0 1px -2px ${clr_green_900} inset`;
            clickedLink.style.color = clr_grey_900;
        }
    })
})

header__hamburger_menu_lang_button.forEach((button)=>{
    button.addEventListener("click", event=>{
        removeColor(header__hamburger_menu_lang_button);

        let langButton = event.target;

        langButton.style.color =  clr_grey_900;
    })
})










