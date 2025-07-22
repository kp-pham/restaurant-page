import displayHomepage from "./home.js";
import displayMenu from "./menu.js";
import "./styles.css";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

homeButton.addEventListener("click", displayHomepage);
menuButton.addEventListener("click", displayMenu);

displayHomepage();