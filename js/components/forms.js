/*JS file for handling JavaScript Validation on Contact page*/

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
    const regex = /\w+@\w+\.\w+/;
    const patternOk = regex.test(email);
    return patternOk;
}


/*Validation of contact form*/

//Fetching input
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

// Errors
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");


export function validateForm () {
   

    let validationOk = true;
    //Validation of name 
    if (inputLength(name.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        if (name.targeted) {
            nameError.style.display = "block";
        }
    }
    //Validation of e-mail 
    if (validateMail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        if (email.targeted) {
            emailError.style.display = "block";
        }
    }
    // Validation of subject
    if (inputLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        if (subject.targeted) {
            subjectError.style.display = "block";
        }
    }
    // Validation of message
    if (inputLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        if (message.targeted) {
            messageError.style.display = "block";
        }
    }
    return validationOk;
}

//The if statement is probably not the best way to handle this, but is a fix so that the eventlistner doesn't effect other pages. Without it does. After som discussing with ChatGPT
if (document.querySelector("#name") && document.querySelector("#email") && 
    document.querySelector("#subject") && document.querySelector("#message")) {
    
    const requiredFields = [name, email, subject, message];

    requiredFields.forEach((field) => {
        field.targeted = false;
        field.addEventListener("input", () => {
            field.targeted = true;
            validateForm();
        });
    });
}