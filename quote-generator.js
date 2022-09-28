// Random quote generator program in JavaScript using an API

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

let quote = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("new-quote");

function randomQuote() {
  let random = Math.floor(Math.random() * 1643);
  quote.innerHTML = data[random].text;
  author.innerHTML = data[random].author;
}

btn.addEventListener("click", randomQuote);
