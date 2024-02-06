let toastBox = document.querySelector(".toast-notification");
let successBtn = document.getElementById("success");
let errorBtn = document.getElementById("error");
let invalidBtn = document.getElementById("invalid");
let successMsg = '<i class="fa-solid fa-circle-check success"></i> Submit Successfully.';
let errorMsg = '<i class="fa-solid fa-circle-xmark error"></i> Something wrong, fix the error!';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation invalid"></i> Invalid entry. Try Again.';


const popNotification = (msg, msgClass) => {
    let newNotification = document.createElement("div");
    newNotification.classList.add("notification");
    newNotification.classList.add(msgClass);
    newNotification.innerHTML = msg;
    toastBox.appendChild(newNotification);
    toastBox.scrollTop = toastBox.scrollHeight - toastBox.clientHeight;
    setTimeout(() => {
        toastBox.removeChild(newNotification);

    }, 5000);
}

successBtn.addEventListener("click", () => {
    popNotification(successMsg, "success");
})

invalidBtn.addEventListener("click", (evt) => {
    popNotification(invalidMsg, "invalid");
})

errorBtn.addEventListener("click", () => {
    popNotification(errorMsg, "error");
})

