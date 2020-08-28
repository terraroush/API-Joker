import { useJoke } from "./JokeProvider.js"
import { getJoke } from "./JokeProvider.js"
import { Joke } from "./Joke.js"
import { Punchline } from "./Punchline.js"


const jokeBtn = document.querySelector(".request-joke-btn");
const jokeEl = document.querySelector(".joke-setup");

let aJoke;

jokeBtn.addEventListener("click", () => {
  getJoke()
  .then(() => {
    aJoke = useJoke()
     jokeEl.innerHTML += Joke(aJoke)
    console.log("I should be grabbing a joke now...");
  })
});

const punchBtn = document.querySelector(".request-punchline-btn");
const punchEl = document.querySelector(".joke-punchline");

punchBtn.addEventListener("click", () => {
  punchEl.innerHTML += Punchline(aJoke)
  console.log("I should be grabbing a punchline now...");
});
