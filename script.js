'use strict';

const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const replay = document.querySelector('.again');
const check = document.querySelector('.check');

let secretNumber;

const randomNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

randomNumber();

const compareNumber = function () {
  let numberGuessed = Number(guess.value);

  if (numberGuessed === secretNumber) {
    message.textContent = 'you guessed right';
  } else if (numberGuessed > secretNumber) {
    message.textContent = 'too high...';
  } else if (numberGuessed < secretNumber) {
    message.textContent = 'too low...';
  }
};

check.addEventListener('click', function () {
  compareNumber();
});

guess.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    compareNumber();
  }
});

replay.addEventListener('click', function () {
  randomNumber();
  guess.value = '';
  message.textContent = 'Start guessing...';
});
