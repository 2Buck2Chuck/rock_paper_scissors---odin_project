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
      let response = alert("You both chose ROCK. It's a tie!", "Click any key to continue");
      return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "PAPER") {
        let response = alert("You both chose PAPER. It's a tie!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = alert("You both chose SCISSORS. It's a tie!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        let response = alert("PAPER beats ROCK! You win!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = alert("ROCK beats SCISSORS! You lose!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        let response = alert("PAPER beats ROCK! You lose!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = alert("SCISSORS beats PAPER! You win!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        let response = alert("SCISSORS beats PAPER! You lose!", "Click any key to continue");
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        let response = alert("ROCK beats SCISSORS! You win!", "Click any key to continue");
        return response;
    }
    else {
        return prompt("Make a proper selection please!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        round(computerPlay(), playerPlay());
     }
}

game();