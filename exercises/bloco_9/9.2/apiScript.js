//const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

function addJoke (joke) {
  const jokeElement = document.createElement('h3');
  console.log(joke);
  jokeElement.innerText = joke;
  document.body.appendChild(jokeElement);
}
const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => addJoke(data.joke));
};

window.onload = () => fetchJoke();