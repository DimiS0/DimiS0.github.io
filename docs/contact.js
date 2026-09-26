const form = document.querySelector("#contactform");
const button = document.querySelector("#submitButton");

const inputfields = [
    {id: "naam", boodschap: "minimal 2  characters"},
    {id: "email", boodschap: "give a real email"},
    {id: "telefoon", boodschap: ""}
];

function validateField(field) {
    const input = document.querySelector(`#${field.id}`);
    const error = document.querySelector(`#${field.id}-error`);
    const geldig = input.checkValidity();

    input.setAttribute("aria-invalid", String(!geldig));
    error.textContent = geldig ? "" : field.boodschap;

    return geldig;
}

form.addEventListener("submit", (event) => {
event.preventDefault();

const everyField = inputfields.map(validateField).every(Boolean);
const formStatus = document.querySelector("#form-status");

if (!everyField){
    formStatus.textContent = "You still have errors in the form";

    setTimeout(() =>{
    formStatus.textContent = "";
    },2000);

    return;
}

formStatus.textContent = "Thank you for filling in the form!";
form.reset();

setTimeout (() =>{
formStatus.textContent = "";
},2000)

});