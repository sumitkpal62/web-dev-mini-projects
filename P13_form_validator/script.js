const fullName = document.getElementById("name");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submit");

const nameError = document.querySelector(".name-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const submitError = document.querySelector(".submit-error");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const checked = '<i class="fa-solid fa-circle-check"></i>';

const validateName = () => {
    if (fullName.value.length == 0) {
        nameError.innerHTML = "Enter your name";
        return false;
    }
    if (!fullName.value.match(/[A-Za-z]+\s{1}[A-Za-z]+/g)) {
        nameError.innerHTML = "Enter your full name";
        return false;
    }
    nameError.innerHTML = checked;
    return true;
}

const validatePhone = () => {
    if (phoneNumber.value == 0) {
        phoneError.innerHTML = "Enter your 10 digit number";
        return false;
    }
    if (!phoneNumber.value.match(/^\d{10}$/g)) {
        phoneError.innerHTML = "Invalid Number";
        return false;
    }
    phoneError.innerHTML = checked;
    return true;
}

const validateEmail = () => {
    if (email.value == 0) {
        emailError.innerHTML = "Enter your email";
        return false;
    }
    if (!email.value.match(emailRegex)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    }
    emailError.innerHTML = checked;
    return true;
}

const validateMessage = () => {
    let total = 30;
    let letters = message.value.length;
    let left = total - letters;
    if (message.value.length < 30) {
        messageError.innerHTML = `${left} characters left`;
        return false;
    }
    messageError.innerHTML = checked;
    return true;
}

fullName.addEventListener("keyup", validateName);
phoneNumber.addEventListener("keyup", validatePhone);
email.addEventListener("keyup", validateEmail);
message.addEventListener("keyup", validateMessage);
submitBtn.addEventListener("click", () => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = "Something went wrong. Fix the error";
    }
    setTimeout(() => {
        submitError.innerHTML = "";
    }, 3000);
})