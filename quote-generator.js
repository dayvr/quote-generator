let quote = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("new-quote");
let tweet = document.getElementById("tweet-quote");

const getQuote = () => {
  // API for quotes
  const url = "https://type.fit/api/quotes";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let random = Math.floor(Math.random() * data.length);
      quote.innerHTML = data[random].text;
      author.innerHTML = "~ " + data[random].author;
    });
};

// Tweet Quote
const tweetQuote = () => {
  let tweetUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
  window.open(tweetUrl, "_blank");
};

// Function call to get quote
getQuote();

// Event Listeners
btn.addEventListener("click", getQuote);
tweet.addEventListener("click", tweetQuote);
