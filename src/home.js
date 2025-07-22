import data from "./images/data/interior.json";
const interiorContext = require.context("./images/interior", false, /\.(png|svg|jpg|jpeg|gif)$/i);

const content = document.getElementById("content");

function displayHomepage() {
    content.textContent = "";
    content.appendChild(createSlideshow());
    createSlideshowController();
    content.appendChild(createAdvertisement());
}

function createSlideshow() {
    const slideshow = document.createElement("div");
    slideshow.classList.add("slideshow");

    const indicators = document.createElement("div");
    indicators.classList.add("dots-container");
    
    data.forEach((interior, index) => {
        slideshow.appendChild(createSlide(interior));
        indicators.appendChild(createIndicator(index));
    });

    slideshow.appendChild(indicators);

    return slideshow;
}

function createSlide(interior) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(createSlideContent(interior));

    return slide;
}

function createSlideContent(interior) {
    const slideContent = document.createElement("img");
    slideContent.src = interiorContext(`./${interior["file"]}`);
    slideContent.alt = interior["description"];

    return slideContent;
}

function createIndicator(index) {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.slide = index;
    indicator.classList.add("dot");

    return indicator;
}

function createSlideshowController() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    updateSlideshow(currentSlide);

    function updateSlideshow(slide) {
        changeSlide(slide);
        changeIndicator(slide);
        changeCurrentSlide(slide);
    }

    function changeSlide(slide) {
        slides[currentSlide].style.display = "none";
        slides[slide].style.display = "block";
    }

    function changeIndicator(slide) {
        dots[currentSlide].classList.remove("active");
        dots[slide].classList.add("active");
    }

    function changeCurrentSlide(slide) {
        currentSlide = slide;
    }

    dots.forEach(dot => dot.addEventListener("click", event => updateSlideshow(event.target.dataset.slide)));
}

function createAdvertisement() {
    const advertisement = document.createElement("blockquote");
    advertisement.textContent = "Light and shadow weave a tapestry as dreams and reality merge and collide. \
        Can you see through it, and find the truth hidden by the magic? Tonight, the most dazzling twin \
        stars of the Court of Fontaine shall reveal the secret!";

    return advertisement;
}

export default displayHomepage;