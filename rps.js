function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * rps.length);
    let choice = rps[random];
    return choice;
}

function playerPlay() {
   const choice = window.prompt("Please type ROCK, PAPER, or SCISSORS");
   return choice;
}

function round(computerSelection, playerSelection) {
    if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "ROCK") {
        alert("You both chose ROCK. It's a tie!", "Click any key to continue");
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "PAPER") {
        alert("You both chose PAPER. It's a tie!", "Click any key to continue");
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "SCISSORS") {
        alert("You both chose SCISSORS. It's a tie!", "Click any key to continue");
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        alert("PAPER beats ROCK! You win!", "Click any key to continue");
        let roundWinner = "player";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        alert("ROCK beats SCISSORS! You lose!", "Click any key to continue");
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        alert("PAPER beats ROCK! You lose!", "Click any key to continue");
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        alert("SCISSORS beats PAPER! You win!", "Click any key to continue");
        let roundWinner = "player";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        alert("SCISSORS beats PAPER! You lose!", "Click any key to continue");
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        alert("ROCK beats SCISSORS! You win!", "Click any key to continue");
        let roundWinner = "player";
        return roundWinner;
    }
    else {
        alert("Make a proper selection please!");
    }
}

function game() {

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) { 
       
        let roundWinner = round(computerPlay(), playerPlay());

        if (roundWinner === "player") {
            playerScore++;
        }
        else if (roundWinner === "computer") {
            computerScore++;
        }
        else {
            
        }
    }
    
    if (playerScore > computerScore) {
        alert("You won the most rounds! YOU WIN THE GAME!!!");
    }
    else if (computerScore > playerScore) {
        alert("You did not win the most rounds. You lose the game :(");
    }
    else {
        alert("You have tied. There is no winner to the game.")
    }
}

game();

console.log(playerScore);
console.log(computerScore);