'use strict';

// DOM elements
  const playerSelectionBtns = document.querySelectorAll('.btn');
  const displayText = document.querySelector('.text-section');
  displayText.style.marginTop = '50px';
  const playerScoreText = document.querySelector('.player-score');
  const drawScoreText = document.querySelector('.draw');
  const computerScoreText = document.querySelector('.computer-score');

// score init
  let playerScore = 0;
  let computerScore = 0;
  let draws = 0;
  let active = 0;
  
// Game logic
  document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function() {
        playRound(btn.id)
      })
  })

  function computerChoice() {
    let choiceArr = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choiceArr[Math.floor(Math.random() * 3)];
    return computerSelection;
  }
  
  function playRound(playerSelection) {
    let computerSelection = computerChoice();
    if (active === 0) {
        if (playerSelection === computerSelection) {
        drawRound();
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        loseRound();
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        winRound();
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        winRound();
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        loseRound();
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        loseRound();
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        winRound();
        }
    }
    // functions that update scoreboard and round text

    function drawRound() {
        draws++;
        displayText.textContent = `It's a tie!`;
        drawScoreText.style.color = 'yellow'
        computerScoreText.style.color = 'white';
        playerScoreText.style.color = 'white';
    }

    function loseRound() {
        computerScore++;
        displayText.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
        playerScoreText.style.color = 'red';
        computerScoreText.style.color = 'green';
        drawScoreText.style.color = 'white';
    }

    function winRound() {
        playerScore++;
        displayText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScoreText.style.color = 'green';
        computerScoreText.style.color = 'red';
        drawScoreText.style.color = 'white';
    }
    updateScore();
    game();
  }

  function updateScore() {
    playerScoreText.textContent = `Player: ${playerScore}`;
    drawScoreText.textContent = `Draws: ${draws}`;
    computerScoreText.textContent = `Computer: ${computerScore}`
}

  function game() {
    if (playerScore === 5) {
      active = 1;
      displayText.textContent = 'You win the game!';
      displayText.style.color = 'green';
      displayText.style.fontSize = '40px'
      displayText.appendChild(newGameBtn);
    } else if (computerScore === 5) {
      active = 1;
      displayText.textContent = 'You lost to a computer!'
      displayText.style.color = 'red';
      displayText.style.fontSize = '40px';
      displayText.appendChild(newGameBtn);
    }
  }

  let newGameBtn = document.createElement('button');
  newGameBtn.innerHTML = 'New Game';
  newGameBtn.classList.add('new-game-btn');
  newGameBtn.addEventListener('click', function() {
      newGame();
  })

  function newGame() {
      newGameBtn.remove();
      displayText.textContent = 'Choose Rock, Paper, or Scissors to begin...';
      displayText.style.color = 'white';
      playerScoreText.style.color = 'white';
      computerScoreText.style.color = 'white';

      active = 0;
      playerScore = 0;
      computerScore = 0;
      draws = 0;
      
      updateScore();
  }
