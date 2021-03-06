import { useJoke } from "./JokeProvider.js"
import { getJoke } from "./JokeProvider.js"
import { Joke } from "./Joke.js"
import { Punchline } from "./Punchline.js"
import { Reset } from "./Reset.js"
import { togglePunchlineBtn } from "./TogglePunchline.js"


const jokeBtn = document.querySelector(".request-joke-btn");
const jokeEl = document.querySelector(".joke-setup");


let aJoke;

jokeBtn.addEventListener("click", () => {
  jokeEl.innerHTML = Reset()
  punchEl.innerHTML = Reset()
  
})

jokeBtn.addEventListener("click", () => {
  getJoke()
  .then(() => {
    aJoke = useJoke()
     jokeEl.innerHTML += Joke(aJoke)
    console.log("I should be grabbing a joke now...")
    togglePunchlineBtn() 
    
  })
});

const punchBtn = document.querySelector(".request-punchline-btn");
const punchEl = document.querySelector(".joke-punchline");

punchBtn.addEventListener("click", () => {
  togglePunchlineBtn()
  punchEl.innerHTML = Reset()
})

punchBtn.addEventListener("click", () => {
  punchEl.innerHTML += Punchline(aJoke)
  console.log("I should be grabbing a punchline now...");
});
