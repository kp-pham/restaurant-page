import displayHomepage from "./home.js";
import displayMenu from "./menu.js";
import displayContact from "./contact.js";
import "./styles.css";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", displayHomepage);
menuButton.addEventListener("click", displayMenu);
contactButton.addEventListener("click", displayContact);

displayHomepage();