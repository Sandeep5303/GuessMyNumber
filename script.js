'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = guess;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!!!' : 'Too Low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = `You lose the GAME!!
    Try Again!!`;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //body
  document.querySelector('body').style.backgroundColor = '#222';

  //value
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //score
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  //input box
  document.querySelector('.guess').value = '';

  //number
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
