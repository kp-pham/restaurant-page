const content = document.getElementById("content");

function displayContact() {
    content.textContent = "";
    content.classList.remove(...content.classList);
    content.classList.add("contact");

    content.appendChild(createContactForm());
}

function createContactForm() {
    const contactForm = document.createElement("form");

    contactForm.appendChild(createSection(createFieldLabel("Name: ", "name"), createTextField("name")));
    contactForm.appendChild(createSection(createFieldLabel("Email Address: ", "email"), createEmailField("email")));
    contactForm.appendChild(createSection(createFieldLabel("Reason for Contact: ", "reason"), createDropdown()));
    contactForm.appendChild(createSection(createFieldLabel("Message: ", "message"), createMessageField("message")));
    contactForm.appendChild(createSubmitButton());

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
    textField.required = true;
    textField.type = "text";
    textField.id = id;

    return textField;
}

function createEmailField(id) {
    const emailField = document.createElement("input");
    emailField.required = true;
    emailField.type = "email";
    emailField.id = id;

    return emailField;
}

function createDropdown() {
    const dropdown = document.createElement("select");
    dropdown.name = "reasons-for-contact";
    dropdown.id = "reason";
    dropdown.required = true;

    dropdown.appendChild(createPlaceholder());
    dropdown.appendChild(createOption("Customer Feedback", "feedback"));
    dropdown.appendChild(createOption("Reservation", "reservation"));
    dropdown.appendChild(createOption("Private Event Booking", "event-booking"));
    dropdown.appendChild(createOption("Job Application" , "job"));
    dropdown.appendChild(createOption("Business Inquiries", "business"));
    dropdown.appendChild(createOption("General Inquiries / Other", "other"));
    
    return dropdown;
}

function createPlaceholder() {
    const placeholder = document.createElement("option");
    placeholder.textContent = "Please select one of the following options.";
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.hidden = true;
    placeholder.value = "";

    return placeholder;
}

function createOption(choice, value) {
    const option = document.createElement("option");
    option.textContent = choice;
    option.value = value;

    return option;
}

function createMessageField(id) {
    const messageField = document.createElement("textarea");
    messageField.required = true;
    messageField.name = "messageField";
    messageField.id = id;

    return messageField;
}

function createSubmitButton() {
    const button = document.createElement("button");
    button.textContent = "Submit";
    button.type = "submit";

    return button;
}

function createSection(label, input) {
    const section = document.createElement("section");
    section.append(label, input);

    return section;
}

export default displayContact;