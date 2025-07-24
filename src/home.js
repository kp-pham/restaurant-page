import data from "./images/data/interior.json";
const interiorContext = require.context("./images/interior", false, /\.(png|svg|jpg|jpeg|gif)$/i);

const content = document.getElementById("content");

function displayHomepage() {
    content.textContent = "";
    content.classList.remove(...content.classList);
    content.classList.add("home");

    content.appendChild(createSlideshow());
    createSlideshowController();
    content.appendChild(createAdSpace());
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

function createAdSpace() {
    const adSpace = document.createElement("div");
    adSpace.classList.add("ad-space");
    adSpace.appendChild(createMagentaCard());
    adSpace.appendChild(createTealCard());
    
    return adSpace;
}

function createMagentaCard() {
    const magentaCard = document.createElement("div");
    magentaCard.classList.add("card", "magenta");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const front = document.createElement("div");
    front.classList.add("front");
    cardContent.appendChild(front);

    const back = document.createElement("div");
    back.classList.add("back");
    back.textContent = "Light and shadow weave a tapestry as dreams and reality merge and collide. \
        Can you see through it, and find the truth hidden by the magic?";
    cardContent.appendChild(back);

    magentaCard.appendChild(cardContent);

    return magentaCard;
}

function createTealCard() {
    const tealCard = document.createElement("div");
    tealCard.classList.add("card", "teal");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const front = document.createElement("div");
    front.classList.add("front");
    cardContent.appendChild(front);

    const back = document.createElement("div");
    back.classList.add("back");
    back.textContent = "Tonight, the most dazzling twin stars of the Court of Fontaine shall reveal the secret!";
    cardContent.appendChild(back);

    tealCard.appendChild(cardContent);

    return tealCard;
}

export default displayHomepage;