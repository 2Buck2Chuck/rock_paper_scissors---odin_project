function computerPlay () {
    const rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * rps.length);
    console.log(rps[random]);
}

function round (computerSelection, playerSelection) {
    if (computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "ROCK") {
      let response = "You both chose ROCK. It's a tie!"
    }
    else if (computerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "PAPER") {
        let response = "You both chose PAPER. It's a tie!"
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS") {
        let response = "You both chose SCISSORS. It's a tie!"
    }
    else if (computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "PAPER") {
        let response = "PAPER beats ROCK! You win!"
    }
    else if (computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "SCISSORS") {
        let response = "ROCK beats SCISSORS! You lose!"
    }
    else if (computerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "ROCK") {
        let response = "PAPER beats ROCK! You lose!"
    }
    else if (computerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "SCISSORS") {
        let response = "SCISSORS beats PAPER! You win!"
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "PAPER") {
        let response = "SCISSORS beats PAPER! You lose!"
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "ROCK") {
        let response = "ROCK beats SCISSORS! You win!"
    }

}
