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
    menuItem.classList.add("menu-item");
    menuItem.appendChild(createPicture(dish));
    menuItem.appendChild(createDescription(dish));

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

function createDescription(dish) {
    const description = document.createElement("div");
    description.classList.add("description");
    description.appendChild(createHeading(dish));

    return description;
}

function createHeading(dish) {
    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.appendChild(createName(dish));
    heading.appendChild(createPrice(dish));

    return heading;
}

function createName(dish) {
    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = dish["name"];

    return name;
}

function createPrice(dish) {
    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = dish["price"];

    return price;
}

button.addEventListener("click", displayMenu);