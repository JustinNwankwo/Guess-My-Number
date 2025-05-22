'use strict';

const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector(".message")
const replay = document.querySelector(".again")

let secretNumber;

const randomNumber = function () {
  secretNumber = Math.round(Math.random() * 20);
};

randomNumber();

guess.addEventListener('keypress', function (event) {
  let numberGuessed = Number(guess.value)
  if (event.key === 'Enter') {
    if (numberGuessed === secretNumber) {
      message.textContent = "you guessed right"
    }

    else if (numberGuessed > secretNumber) {
      message.textContent = "too high..."
    }
    else if (numberGuessed < secretNumber) {
      message.textContent = "too low..."
    }
  }
});

replay.addEventListener("click", function() {
  randomNumber();
  guess.value = ''
  message.textContent = 'Start guessing...'
})