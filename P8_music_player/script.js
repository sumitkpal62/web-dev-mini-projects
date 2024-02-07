const playPauseBtn = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const song = document.getElementById("song");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

const playPause = () => {
    if (playPauseBtn.classList.contains("fa-pause")) {
        song.pause();
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
    }
    else {
        song.play();
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
}

playPauseBtn.addEventListener("click", playPause);
