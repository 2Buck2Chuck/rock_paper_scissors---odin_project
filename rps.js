function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * rps.length);
    let choice = rps[random];
    return choice;
}

function round(computerSelection, playerSelection) {
    if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "ROCK") {
      let response = "You both chose ROCK. It's a tie!";
      return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "PAPER") {
        let response = "You both chose PAPER. It's a tie!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = "You both chose SCISSORS. It's a tie!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        let response = "PAPER beats ROCK! You win!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = "ROCK beats SCISSORS! You lose!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        let response = "PAPER beats ROCK! You lose!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        let response = "SCISSORS beats PAPER! You win!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        let response = "SCISSORS beats PAPER! You lose!";
        return response;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        let response = "ROCK beats SCISSORS! You win!";
        return response;
    }
    else {
        return "Make a proper selection please!";
    }
}

