const password = document.getElementById("password");
const inputBox = document.querySelector(".input-box");
const message = document.getElementById("message");
const strength = document.getElementById("strength")

password.addEventListener("input", () => {
    if (password.value.length > 0) {
        message.style.display = "block";
    }
    else {
        message.style.display = "none";
    }
    if (password.value.length <= 4) {
        strength.innerText = "Weak";
        password.style.borderColor = "#ff5925";
        message.style.color = "#ff5925";
    }
    else if (password.value.length > 4 && password.value.length <= 8) {
        strength.innerText = "Medium";
        password.style.borderColor = "yellow";
        message.style.color = "yellow";
    }
    else {
        strength.innerText = "Strong";
        password.style.borderColor = "#26d730";
        message.style.color = "#26d730";
    }
})