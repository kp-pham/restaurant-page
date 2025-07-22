import "./home.js";
import displayMenu from "./menu.js";
import "./styles.css";

const menuButton = document.getElementById("menu");

menuButton.addEventListener("click", displayMenu);