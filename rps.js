const container = document.querySelector('div');

/*Create a nodelist of the three choice buttons and add an event listener
that returns the user-chosen button's id, as well as calls game() with the button id*/
const buttons = document.querySelectorAll('button');
buttons.forEach(getButtonId);

function getButtonId(button) {
    button.addEventListener('click', (e) => {
        game(button.id);
    })
}

//A function for randomizing the computers choice in "Rock, Paper, Scissors"
function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * rps.length);
    let choice = rps[random];
    return choice;
}

/*A function for giving structure to the entire game (consisting of 5 rounds) and
then using the return value of round() to calculate the overall game score and
print a response alert to the user*/
function game(playerPlay) {

    playerScore = 0;
    computerScore = 0;
       
    let roundWinner = round(computerPlay(), playerPlay);

    if (roundWinner === "player") {
        playerScore++;
    }
    else if (roundWinner === "computer") {
        computerScore++;
    }
    else return;

    if (playerScore === 5 || computerScore === 5) {
    
        if (playerScore > computerScore) {
            alert("You won the most rounds! YOU WIN THE GAME!!!");
        }
        else if (computerScore > playerScore) {
            alert("You did not win the most rounds. You lose the game :(");
        }
        else return;
    }
    else return;
}

/*A function for analyzing each possible outcome to the game and creating a
customized alert to the user*/
function round(computerSelection, playerSelection) {
    if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "ROCK") {
        const info = document.createElement('p');
        info.textContent = "You both chose ROCK. It's a tie!";
        container.appendChild(info);
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "PAPER") {
        const info = document.createElement('p');
        info.textContent = "You both chose PAPER. It's a tie!";
        container.appendChild(info);
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "SCISSORS") {
        const info = document.createElement('p');
        info.textContent = "You both chose SCISSORS. It's a tie!";
        container.appendChild(info);
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") { 
        const info = document.createElement('p');
        info.textContent = "CPU chose ROCK. PAPER beats ROCK! You win!";
        container.appendChild(info);
        let roundWinner = "player";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        const info = document.createElement('p');
        info.textContent = "CPU chose ROCK. ROCK beats SCISSORS! You lose!";
        container.appendChild(info);
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        const info = document.createElement('p');
        info.textContent = "CPU chose PAPER. PAPER beats ROCK! You lose!";
        container.appendChild(info);
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        const info = document.createElement('p');
        info.textContent = "CPU chose PAPER. SCISSORS beats PAPER! You win!";
        container.appendChild(info);
        let roundWinner = "player";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        const info = document.createElement('p');
        info.textContent = "CPU chose SCISSORS. SCISSORS beats PAPER! You lose!";
        container.appendChild(info);
        let roundWinner = "computer";
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        const info = document.createElement('p');
        info.textContent = "CPU chose SCISSORS. ROCK beats SCISSORS! You win!";
        container.appendChild(info);
        let roundWinner = "player";
        return roundWinner;
    }
    else {
        const info = document.createElement('p');
        info.textContent = "Make a proper selection please!";
        container.appendChild(info);
    }
}

