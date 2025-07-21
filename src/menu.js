const dishesContext = require.context("./images/dishes", false, /\.(png|svg|jpg|jpeg|gif)$/i);
const dishes = dishesContext.keys().map(dishesContext);

const content = document.getElementById("content");

dishes.forEach(dish => {
    const image = document.createElement("img");
    image.src = dish;
    content.appendChild(image);
});