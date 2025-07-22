import data from "./images/data/dishes.json";

const dishesContext = require.context("./images/dishes", false, /\.(png|svg|jpg|jpeg|gif)$/i);

const button = document.getElementById("menu");
const content = document.getElementById("content");

function displayMenu() {
    content.textContent = "";

    data.forEach(dish => {
        const image = document.createElement("img");
        image.src = dishesContext(`./${dish["file"]}`);
        image.alt = dish["name"];
        content.appendChild(image);
    });
}

button.addEventListener("click", displayMenu);