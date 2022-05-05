function computerPlay() {
    const option = Math.floor(Math.random() * 3) + 1;
    let computerSelection = null;
    let pcHand = document.getElementById('pcHand');
    if (option == 1) {
        pcHand.src= "./images/rockPc.svg";
        pcHand.alt="Rock"
        computerSelection = "Rock"
    } else if (option == 2) {
        pcHand.src= "./images/paperPc.svg"
        pcHand.alt="Paper"
        computerSelection = "Paper"
    } else {
        pcHand.src="./images/scissorsPc.svg";
        pcHand.alt="Scissors"
        computerSelection = "Scissors"
    }
    return computerSelection;
}

function playerPlay(playerSelection) {
    let playerHand = document.getElementById('playerHand');
    if (playerSelection == "Rock") {
        playerHand.src= "./images/rockUser.svg";
        playerHand.alt="Rock";
    } else if (playerSelection == "Paper") {
        playerHand.src= "./images/paperUser.svg";
        playerHand.alt="Paper";
    } else {
        playerHand.src= "./images/scissorsUser.svg";
        playerHand.alt="Scissors";
    }
    return playerSelection;
}

function reset() {
    playerVictory = 0;
    computerVictory = 0;
}

function conditionChecker(result) {
    let score = document.getElementById('scorePoints');
    let message = document.getElementById('message');
    if (playerVictory != 5 && computerVictory != 5) {
        message.textContent = result;
        score.textContent = `Player Score ${playerVictory} - ${computerVictory} Machine Score`
    } else if (playerVictory == 5) {
        message.style.color = 'green';
        message.textContent = `If you want to play again, choose your hand!`;
        score.style.color = 'green';
        score.textContent = `Congratulations! You've won the match with ${playerVictory} points!`;
        reset();
    } else {
        message.style.color = 'red';
        message.textContent = `If you want a rematch, choose your hand!`;
        score.style.color = 'red';
        score.textContent = `Sorry, you lose! Computer have won the match with ${computerVictory} points!`;
        reset();
    }
}

function playRound(computerSelection, playerSelection) {
    let result = 0;
    if (computerSelection === playerSelection) {
        result = `Draw! Both choose ${playerSelection}`;
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerVictory += 1;
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerVictory += 1;
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerVictory += 1;
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerVictory += 1;
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerVictory += 1;
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerVictory += 1;
    }
    conditionChecker(result);
}

let playerVictory = 0;
let computerVictory = 0;
let finalScore = 0;

const rockBtn = document.getElementById('btn1');
const paperBtn = document.getElementById('btn2');
const scissorsBtn = document.getElementById('btn3');

rockBtn.addEventListener('click', () => playRound(computerPlay(), playerPlay("Rock")));
paperBtn.addEventListener('click', () => playRound(computerPlay(), playerPlay("Paper")));
scissorsBtn.addEventListener('click', () => playRound(computerPlay(), playerPlay("Scissors")));