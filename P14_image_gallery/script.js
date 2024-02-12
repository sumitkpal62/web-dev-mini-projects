const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");
const carousel = document.querySelector(".images");

carousel.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    carousel.scrollLeft += evt.deltaY;
});

rightBtn.addEventListener("click", () => {
    carousel.scrollLeft += 1275;

});

leftBtn.addEventListener("click", () => {
    carousel.scrollLeft -= 1275;
});

let page = 0

setInterval(() => {
    if (page != 5) {
        carousel.scrollLeft += 1275;
        page++;
    }
    else {
        carousel.scrollLeft = 0;
        page = 0;
    }
}, 5000);