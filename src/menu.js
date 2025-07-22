import data from "./images/data/dishes.json";

const dishesContext = require.context("./images/dishes", false, /\.(png|svg|jpg|jpeg|gif)$/i);

const button = document.getElementById("menu");
const content = document.getElementById("content");

function displayMenu() {
    content.textContent = "";

    data.forEach(dish => content.appendChild(createMenuItem(dish)));
}

function createMenuItem(dish) {
    const menuItem = document.createElement("div");
    menuItem.appendChild(createPicture(dish));

    return menuItem;
}

function createPicture(dish) {
    const picture = document.createElement("div");
    picture.classList.add("picture");
    picture.appendChild(loadImage(dish));

    return picture;
}

function loadImage(dish) {
    const image = document.createElement("img");
    image.src = dishesContext(`./${dish["file"]}`);
    image.alt = dish["name"];

    return image;
}

button.addEventListener("click", displayMenu);