const days = document.querySelector(".days .numbers");
const hours = document.querySelector(".hours .numbers");
const minutes = document.querySelector(".minutes .numbers");
const seconds = document.querySelector(".seconds .numbers");

let launchDate = new Date("Feb 28, 2024").getTime();


let x = setInterval(() => {
    let todayDate = new Date().getTime();
    let remTime = launchDate - todayDate;

    let d = Math.floor(remTime / (1000 * 60 * 60 * 24));
    let h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((remTime % (1000 * 60)) / 1000);

    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    if (d == 0 && h == 0 && m == 0 && s == 0) {
        clearInterval(x);
    }
}, 1000);