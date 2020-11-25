'use strict';

function computerSelection() {
    let choiceArr = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choiceArr[choice];
  }

  let myScore = 0;
  let computerScore = 0;
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      return 'Computer Wins! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      myScore++;
      return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      myScore++;
      return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      return 'Computer Wins! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      return 'Computer Wins! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      myScore++;
      return 'You Win! Scissors beats Paper';
    }
  }

  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt('Choose rock, paper, or scissors').toLowerCase();
      console.log(playRound(playerSelection, computerSelection()));
      console.log('Your Score: ' + myScore + ' Computer Score: ' + computerScore);
    }
    if (myScore > computerScore) {
      console.log('You win ' + myScore + ' rounds to ' + computerScore);
    } else if (computerScore > myScore) {
      console.log('You lose ' + computerScore + ' rounds to ' + myScore);
    } else if (computerScore === myScore) {
      console.log('You tied ' + computerScore + ' rounds to ' + myScore);
    }
  }