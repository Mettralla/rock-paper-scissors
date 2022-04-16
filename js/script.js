function computerPlay() {
    const option = Math.floor(Math.random() * 3) + 1;
    let computerSelection = "null";
    if (option == 1) {
        computerSelection = "rock";
    } else if (option == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound(computerSelection, playerSelection) {
    let lowerPlayer = playerSelection.toLowerCase();
    console.log(`Computer choose: ${computerSelection}`);
    console.log(`You choose: ${lowerPlayer}`);
    let result = 0;
    if (computerSelection === lowerPlayer) {
        result = `Draw! Both choose ${lowerPlayer}`;
    } else if (computerSelection == "rock" && lowerPlayer == "paper") {
        result = `You Win! ${lowerPlayer} beats ${computerSelection}`;
    } else if (computerSelection == "paper" && lowerPlayer == "rock") {
        result = `You Lose! ${computerSelection} beats ${lowerPlayer}`;
    } else if (computerSelection == "paper" && lowerPlayer == "scissors") {
        result = `You Win! ${lowerPlayer} beats ${computerSelection}`;
    } else if (computerSelection == "scissors" && lowerPlayer == "paper") {
        result = `You Lose! ${computerSelection} beats ${lowerPlayer}`;
    } else if (computerSelection == "scissors" && lowerPlayer == "rock") {
        result = `You Win! ${lowerPlayer} beats ${computerSelection}`;
    } else if (computerSelection == "rock" && lowerPlayer == "scissors") {
        result = `You Lose! ${computerSelection} beats ${lowerPlayer}`;
    }
    return result;
}

function game(){
    //ESTA FUNCION REALIZA 5 RONDAS DEL JUEGO Y DEVUELVE EL RESULTADO FINAL
    //ESTOS CONTADORES LLEVAN EL RESULTADO DE LAS 5 RONDAS
    let playerVictory = 0;
    let computerVictory = 0;
    let finalScore = 0;
    //BUCLE DE 5 RONDAS
    for(let i = 0; i < 5; i++) {
        //ESTA FUNCION DEVUELVE LA MANO DE LA COMPUTADORA
        let computerSelection = computerPlay();
        //ESTA VARIABLE ES LA MANO DEL JUGADOR
        let playerSelection = prompt("Choose your hand: ");
        //ESTA VARIABLE DEVUELVE EL RESULTADO DE LA RONDA
        let matchResult = playRound(computerSelection, playerSelection);
        //MOSTRAR GANADOR DE LA RONDA
        console.log(matchResult);
        //DETECTA SI GANASTE USANDO SLIDING Y AUMENTA LOS CONTADORES
        let short = matchResult.slice(4,7);
        if (short == `Win`) {
            playerVictory += 1;
        } else if (short == `Los`) {
            computerVictory +=1;
        }
    }
    //DETECTA QUIEN GANO EL JUEGO
    if (playerVictory > computerVictory) {
        finalScore = `Congratulations! You won with ${playerVictory} against ${computerVictory}`;
        return finalScore;
    } else if (playerVictory < computerVictory) {
        finalScore = `Sorry! You lose with ${playerVictory} against ${computerVictory}`;
        return finalScore;
    } else if (playerVictory == computerVictory) {
        finalScore = `It's a Draw! Both have ${playerVictory}`;
        return finalScore;
    }
}

let result = game();
console.log(result);