const interiorContext = require.context("./images/interior", false, /\.(png|svg|jpg|jpeg|gif)$/i);
const interiorImages = interiorContext.keys().map(interiorContext);

const content = document.getElementById("content");

function displayHomepage() {
    content.textContent = "";
    content.appendChild(createSlideshow());
}

function createSlideshow() {
    const slideshow = document.createElement("div");
    slideshow.classList.add("slideshow");

    interiorImages.forEach(image => {
        const slide = document.createElement("img");
        slide.src = image;
        slideshow.appendChild(slide);
    });

    return slideshow;
}

export default displayHomepage;