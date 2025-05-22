'use strict';

const number = document.querySelector('.number');
const guess = document.querySelector('.guess');

const randomNumber = function () {
  number.value = Math.round(Math.random() * 20);
};

randomNumber();

guess.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    if (guess.value = number) {
      return console.log(guess.value);
    }
  }
});

console.log(number.value);
console.log(guess.value);
