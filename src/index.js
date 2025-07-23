import displayHomepage from "./home.js";
import displayMenu from "./menu.js";
import displayContact from "./contact.js";
import "./styles.css";

const nav = document.querySelector("nav");

const HOMEPAGE = "home";
const MENU = "menu";
const CONTACT = "contact";

function clickHandlerNav(event) {
    if (event.target.tagName === "BUTTON") changeTab(event);
}

function changeTab(event) {    
    const tab = event.target.id;
    
    closeCurrentTab();
    openTab(tab);

    switch(tab) {
        case HOMEPAGE:
            displayHomepage();
            break;
        case MENU:
            displayMenu();
            break;
        case CONTACT:
            displayContact();
            break;
    }
}

function closeCurrentTab() {
    const currentTab = document.querySelector(".active");
    currentTab.classList.remove("active");
}

function openTab(tab) {
    const newTab = document.getElementById(tab);
    newTab.classList.add("active");
}

nav.addEventListener("click", clickHandlerNav);

displayHomepage(); 