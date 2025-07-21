import skylightImage from "./images/interior/skylight.png";

const content = document.getElementById("content");

const image = document.createElement("img");
image.src = skylightImage;
image.alt = "Picture of skylight on the balcony of the second floor.";
image.style.width = "500px";
image.style.height = "auto";

content.appendChild(image);

const heading = document.createElement("h1");
heading.textContent = "Hotel Debord";

content.appendChild(heading);

const quote = document.createElement("p");
quote.textContent = "Art is the key ingredient in fine dining.";

content.appendChild(quote);

const advertisement = document.createElement("p");
advertisement.textContent = "Light and shadow weave a tapestry as dreams and reality merge and collide. Can you see through it, and find the truth hidden by the magic?";

content.appendChild(advertisement);

const callToAction = document.createElement("p");
callToAction.textContent = "Tonight, the most dazzling twin stars of the Court of Fontaine shall reveal the secret!";

content.appendChild(callToAction);