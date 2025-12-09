//store the scores
let humanScore = 0;
let computerScore = 0;
// select the DOM elements
const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");
const winnerAnnouncement = document.getElementById("winner-announcement");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const restartButton = document.getElementById("restart-game");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
restartButton.addEventListener("click", restartGame);

// get computer choice
function getComputerChoice() {
  //get the computer to give out random numbers and store in a variable
  let computerChoice = Math.floor(Math.random() * 3);
  // turn those variables into the options
  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  //return the variable
  return computerChoice;
}

//play one round
function playRound(humanChoice, computerChoice) {
  //make choices case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  //compare choices
  if (humanChoice === computerChoice) {
    roundResult.textContent = `${humanChoice} ties with ${computerChoice}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    roundResult.textContent = `${humanChoice} beats ${computerChoice}!`;
    humanScore++;
  } else {
    roundResult.textContent = `${computerChoice} beats ${humanChoice}!`;
    computerScore++;
  }
  scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  // Check if game over
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winnerAnnouncement.textContent = "🎉 You win the game!";
    } else {
      winnerAnnouncement.textContent = "💻 Computer wins the game!";
    }

    // Disable the buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

//Restart the game
function restartGame() {
  // Enable the buttons
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;

  roundResult.textContent = "Restarting the game";
  humanScore = 0;
  computerScore = 0;
  scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
  winnerAnnouncement.textContent = "";
}
