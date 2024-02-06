const playPauseBtn = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const song = document.getElementById("song");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

playPauseBtn.addEventListener("click", play);