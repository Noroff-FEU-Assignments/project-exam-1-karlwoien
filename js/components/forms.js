
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
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

const requiredFields = [name, email, subject, message];

export function validateForm () {
   console.clear();

    let validationOk = true;
    //Validation of name 
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
    //Validation of e-mail 
    if (validateMail(email.value) === true) {
        emailError.style.display = "none";
        console.log("E-mail is fine!")
    } else {
        if (email.targeted) {
            emailError.style.display = "block";
        }
        validationOk = false;
        console.log("Oooops. E-mail is not fine!")
    }
    // Validation of subject
    if (inputLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
        console.log("Subject is fine!")
    } else {
        if (subject.targeted) {
            subjectError.style.display = "block";
        }
        validationOk = false;
        console.log("Oooops. Subject is not fine!")
    }
    // Validation of message
    if (inputLength(message.value, 25) === true) {
        messageError.style.display = "none";
        console.log("Subject is fine!")
    } else {
        if (message.targeted) {
            messageError.style.display = "block";
        }
        validationOk = false;
        console.log("Oooops. Subject is not fine!")
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