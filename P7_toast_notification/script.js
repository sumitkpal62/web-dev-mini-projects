let toastBox = document.querySelector(".toast-notification");
let successBtn = document.getElementById("success");
let errorBtn = document.getElementById("error");
let invalidBtn = document.getElementById("invalid");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Submit Successfully.';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Something wrong, fix the error!';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid entry. Try Again.';

const selectNotification = (target) => {
    if (target.value == 'Success') {

    }
}

const popNotification = () => {
    let newNotification = document.createElement("div");
    newNotification.classList.add("notification");
    newNotification.innerText = "Success";
    toastBox.appendChild(newNotification);
    toastBox.scrollTop = toastBox.scrollHeight - toastBox.clientHeight;
    setTimeout(() => {
        toastBox.removeChild(newNotification);

    }, 5000);
}

// button.addEventListener("click", popNotification);
successBtn.addEventListener("click", (evt) => {
    let newNotification = document.createElement("div");
    newNotification.classList.add("notification");
    newNotification.innerHTML = successMsg;
    newNotification.style.color = 'green'
    toastBox.appendChild(newNotification);
    toastBox.scrollTop = toastBox.scrollHeight - toastBox.clientHeight;
    setTimeout(() => {
        toastBox.removeChild(newNotification);

    }, 5000);
})

errorBtn.addEventListener("click", (evt) => {
    let newNotification = document.createElement("div");
    newNotification.classList.add("notification");
    newNotification.innerHTML = errorMsg;
    newNotification.style.color = 'red'
    toastBox.appendChild(newNotification);
    toastBox.scrollTop = toastBox.scrollHeight - toastBox.clientHeight;
    setTimeout(() => {
        toastBox.removeChild(newNotification);

    }, 5000);
})

invalidBtn.addEventListener("click", (evt) => {
    let newNotification = document.createElement("div");
    newNotification.classList.add("notification");
    newNotification.innerHTML = invalidMsg;
    newNotification.style.color = 'orange'
    toastBox.appendChild(newNotification);
    toastBox.scrollTop = toastBox.scrollHeight - toastBox.clientHeight;
    setTimeout(() => {
        toastBox.removeChild(newNotification);

    }, 5000);
})