const content = document.getElementById("content");

function displayContact() {
    content.textContent = "";
    content.classList.remove(...content.classList);
    content.classList.add("contact");

    content.appendChild(createContactForm());
}

function createContactForm() {
    const contactForm = document.createElement("form");

    contactForm.appendChild(createFieldLabel("Name: ", "name"));
    contactForm.appendChild(createTextField("name"));

    contactForm.appendChild(createFieldLabel("Email Address: ", "email"));
    contactForm.appendChild(createEmailField("email"));

    contactForm.appendChild(createFieldLabel("Message: ", "message"));
    contactForm.appendChild(createMessageField("message"));

    return contactForm;
}

function createFieldLabel(label, item) {
    const fieldLabel = document.createElement("label");
    fieldLabel.textContent = label;
    fieldLabel.htmlFor = item;

    return fieldLabel;
}

function createTextField(id) {
    const textField = document.createElement("input");
    textField.type = "text";
    textField.id = id;

    return textField;
}

function createEmailField(id) {
    const emailField = document.createElement("input");
    emailField.type = "email";
    emailField.id = id;

    return emailField;
}

function createMessageField(id) {
    const messageField = document.createElement("textarea");
    messageField.name = "messageField";
    messageField.id = id;

    return messageField;
}


export default displayContact;