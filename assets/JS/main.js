const container = document.querySelector(".container");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const luckPhrase = document.querySelector(".screen2 .luck p");
const button = document.querySelector(".button");
const URL = "https://api.adviceslip.com/advice";
let response;

container.addEventListener("click", (e) => {
  let t = e.target;

  if (t.classList.contains("cookie")) {
    luckPhrase.innerHTML = response;
    clikcToggle();
  }

  if (t.classList.contains("button")) {
    clikcToggle();
    fetchAdvice();
  }
});

function clikcToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

const fetchAdvice = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((phrase) => {
      console.log(phrase.slip.advice);
      response = phrase.slip.advice;
    });
};

fetchAdvice();
