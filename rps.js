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
        let response = "a";
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "PAPER") {
        let response = "b";
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = "c";
        return response;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        let response = "d";
        return response;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = "e";
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        let response = "f";
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = "g";
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        let response = "h";
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        let response = "i";
        return response;
    }
    else {

    }
}

function game() {

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) { 
       
        let option = round(computerPlay(), playerPlay());

        if (option === "a") {
            let response = alert("You both chose ROCK. It's a tie!", "Click any key to continue");
            console.log(response);
        }
        else if (option === "b") {
            let response = alert("You both chose PAPER. It's a tie!", "Click any key to continue");
            console.log(response);
        }
        else if (option === "c") {
            let response = alert("You both chose SCISSORS. It's a tie!", "Click any key to continue");
            console.log(response);
        }
        else if (option === "d") {
            let response = alert("PAPER beats ROCK! You win!", "Click any key to continue");
            console.log(response);
            playerScore++
        }
        else if (option === "e") {
            let response = alert("ROCK beats SCISSORS! You lose!", "Click any key to continue");
            console.log(response);
            computerScore++;
        }
        else if (option === "f") {
            let response = alert("PAPER beats ROCK! You lose!", "Click any key to continue");
            console.log(response);
            computerScore++;
        }
        else if (option === "g") {
            let response = alert("SCISSORS beats PAPER! You win!", "Click any key to continue");
            console.log(response);
            playerScore++;
        }
        else if (option === "h") {
            let response = alert("SCISSORS beats PAPER! You lose!", "Click any key to continue");
            console.log(response);
            computerScore++;
        }
        else if (option === "i") {
            let response = alert("ROCK beats SCISSORS! You win!", "Click any key to continue");
            console.log(response);
            playerScore++;
        }
        else {
            return alert("Make a proper selection please!");
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