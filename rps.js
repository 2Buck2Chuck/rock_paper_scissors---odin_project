//A function for randomizing the computers choice in "Rock, Paper, Scissors"

function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * rps.length);
    let choice = rps[random];
    return choice;
}

/*A small function for creating a pop-up window, allowing the player to make 
their choice in "Rock, Paper, Scissors"*/

function playerPlay() {
   const choice = window.prompt("Please type ROCK, PAPER, or SCISSORS");
   return choice;
}

/*A function for analyzing each possible outcome to the game and creating a
customized alert to the user/player*/

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
        alert("CPU chose ROCK. PAPER beats ROCK! You win!", "Click any key to continue");
        let roundWinner = "player";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        alert("CPU chose ROCK. ROCK beats SCISSORS! You lose!", "Click any key to continue");
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        alert("CPU chose PAPER. PAPER beats ROCK! You lose!", "Click any key to continue");
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        alert("CPU chose PAPER. SCISSORS beats PAPER! You win!", "Click any key to continue");
        let roundWinner = "player";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        alert("CPU chose SCISSORS. SCISSORS beats PAPER! You lose!", "Click any key to continue");
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        alert("CPU chose SCISSORS. ROCK beats SCISSORS! You win!", "Click any key to continue");
        let roundWinner = "player";
        return roundWinner;
    }
    else {
        alert("Make a proper selection please!");
    }
}

/*A function for giving structure to the entire game (consisting of 5 rounds) and
then using the return value of round() to calculate the overall game score and
print a response alert to the user/player*/

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