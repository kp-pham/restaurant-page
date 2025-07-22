const content = document.getElementById("content");

function displayContact() {
    content.textContent = "";
    content.classList.remove(...content.classList);
    content.classList.add("contact");
}

export default displayContact;