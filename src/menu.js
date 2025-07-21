const dishesContext = require.context("./images/dishes", false, /\.(png|svg|jpg|jpeg|gif)$/i);
const dishes = dishesContext.keys().map(dishesContext);

const button = document.getElementById("menu");
const content = document.getElementById("content");

function displayMenu() {
    content.textContent = "";

    dishes.forEach(dish => {
        const image = document.createElement("img");
        image.src = dish;
        content.appendChild(image);
    });
}

button.addEventListener("click", displayMenu);