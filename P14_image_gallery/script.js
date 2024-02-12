const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");
const carousel = document.querySelector(".images");

let page = 0

carousel.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    carousel.scrollLeft += evt.deltaY;
});

rightBtn.addEventListener("click", () => {
    carousel.scrollLeft += 1275;
    page++;
});

leftBtn.addEventListener("click", () => {
    carousel.scrollLeft -= 1275;
    page--;
});

setInterval(() => {
    if (page < 6) {
        carousel.scrollLeft += 1275;
        page++;
    }
    else {
        carousel.scrollLeft = 0;
        page = 0;
    }
}, 5000);