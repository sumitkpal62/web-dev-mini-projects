const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("original-img");
const line = document.getElementById("line");


originalImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}