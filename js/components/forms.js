
// Check length of value entered in input
function inputLength (value, length) {
    if (value.trim().length >= length) {
        return true;
    } else {
        return false;
    }
}

// Check the e-mail that is passed in

function validateMail(email) {
    const regex = /\a+@\a+\.\a+/;
    const patternOk = regex.test(email);
    return patternOk;
}


// Validation of contact form

const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const requiredFields = [name, email, subject, message];

function validateForm () {
   console.clear();

    let validationOk = true;

    if (inputLength(name.value, 5) === true) {
        nameError.style.display = "none";
        console.log("Name is fine!")
    } else {
        if (name.targeted) {
            nameError.style.display = "block";
        }
        validationOk = false;
        console.log("Oooops. Name is not fine!")
    }
    return validationOk;
}

requiredFields.forEach((field) => {
    field.targeted = false;
    field.addEventListener("input", () => {
        field.targeted = true;
        const validationPassed = validateForm();
    });
});