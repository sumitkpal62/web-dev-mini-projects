let speech = new SpeechSynthesisUtterance();
const btn = document.getElementById("btn");
const text = document.getElementById("speech-text");
const voiceSelect = document.getElementById("voices");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
        console.log(voiceSelect.options)
    })
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click", () => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
})