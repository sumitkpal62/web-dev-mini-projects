const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('display');

let timer = null;
let [hours, minutes, seconds] = [0, 0, 0];

const updateDisplay = () => {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    display.innerText = `${h}:${m}:${s}`;
}

const clock = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

const startTimer = () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(clock, 1000);
}

const stopTimer = () => {
    clearInterval(timer);
}

const resetTimer = () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0]
    updateDisplay()
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
