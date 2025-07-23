import data from "./images/data/dishes.json";

const dishesContext = require.context("./images/dishes", false, /\.(png|svg|jpg|jpeg|gif)$/i);

const content = document.getElementById("content");

function displayMenu() {
    content.textContent = "";
    content.classList.remove(...content.classList);
    content.classList.add("menu");

    data.forEach(category => {
        const container = createCategory(getCategoryName(category));
        container.appendChild(createMenuItems(getDishesInCategory(category)));
        content.appendChild(container);
    });
}

function createCategory(name) {
    const category = document.createElement("div");
    category.classList.add(name);
    category.appendChild(createCategoryHeading(capitalize(name)));

    return category;
}

function getCategoryName(category) {
    return Object.keys(category)[0];
}

function createCategoryHeading(heading) {
    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = heading;

    return categoryHeading;
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function createMenuItems(menuItems) {
    const container = document.createElement("div");
    container.classList.add("menu-items");
    menuItems.forEach(menuItem => container.appendChild(createMenuItem(menuItem)));

    return container;
}

function getDishesInCategory(category) {
    return Object.values(category)[0];
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
    description.appendChild(createParagraph(dish));

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

function createParagraph(dish) {
    const paragraph = document.createElement("p");
    paragraph.textContent = dish["description"];

    return paragraph;
}

export default displayMenu;