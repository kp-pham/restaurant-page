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
    
    interiorImages.forEach(image => slideshow.appendChild(createSlide(image)));

    return slideshow;
}

function createSlide(image) {
    const slide = document.createElement("div");
    slide.appendChild(createSlideContent(image));

    return slide;
}

function createSlideContent(image) {
    const slideContent = document.createElement("img");
    slideContent.src = image;

    return slideContent;
}

export default displayHomepage;