const BASE_URL = "https://api.quotable.io/random";
const quote = document.querySelector(".quote-box blockquote");
const author = document.querySelector(".quote-box span");
const newQuote = document.querySelector(".new-quote");
const tweet = document.querySelector(".tweet");

function getQuote() {
    fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            quote.textContent = data.content;
            author.textContent = data.author;
        });
}

newQuote.addEventListener("click", getQuote);


window.onload = getQuote;

tweet.addEventListener("click", () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`);
});