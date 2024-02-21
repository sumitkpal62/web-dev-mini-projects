let selectorField = document.getElementById("selectorField");
let fieldName = document.querySelector(".select");
let options = document.querySelectorAll(".options");
let list = document.getElementById("list");
let arrow = document.querySelector(".arrow");

selectorField.onclick = function () {
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}

for (option of options) {
    option.onclick = function () {
        fieldName.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    }
}