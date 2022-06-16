//Variables to be inititialized at the start of the program
const container = document.querySelector('div');
let score = document.createElement('p');
let info = document.createElement('p');
container.appendChild(score);
container.appendChild(info);
playerScore = 0;
computerScore = 0;
roundWinner = '';



/*Create a nodelist of the three choice buttons and add an event listener
that returns the user-chosen button's id, as well as calls game() with the button id value*/
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

/*A function for giving structure to the game by announcing
the winner once 5 rounds have been won*/
function game(playerPlay) {
    if (playerScore < 4 && computerScore < 4) {    
           
        roundWinner = round(computerPlay(), playerPlay);
    }
    else if (playerScore === 4 || computerScore === 4) {
        
        roundWinner = round(computerPlay(), playerPlay);
        
        if (playerScore > computerScore && roundWinner === 'player') {
            const info = document.createElement('p');
            info.textContent = "You won the most rounds! YOU WIN THE GAME!!!";
            container.appendChild(info);
        }
        else if (computerScore > playerScore && roundWinner === 'computer') {
            const info = document.createElement('p');
            info.textContent = "You did not win the most rounds. You lose the game :(";
            container.appendChild(info);
        }
        else return;
    }
    else if (playerScore === 5 || computerScore === 5) {
        const info = document.createElement('p');
        info.textContent = "The game is over, please refresh the page to play again...";
        container.appendChild(info);
    }
    else return;
}

/*A function for analyzing each possible outcome to the game and creating a
customized alert to the user*/
function round(computerSelection, playerSelection) {
    if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "ROCK") {
        info.textContent = "You both chose ROCK. It's a tie!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "PAPER") {
        info.textContent = "You both chose PAPER. It's a tie!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "SCISSORS") {
        info.textContent = "You both chose SCISSORS. It's a tie!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER") { 
        playerScore++;
        info.textContent = "CPU chose ROCK. PAPER beats ROCK! You win!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
        let roundWinner = 'player';
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        computerScore++;
        info.textContent = "CPU chose ROCK. ROCK beats SCISSORS! You lose!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
        let roundWinner = 'computer';
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK") {
        computerScore++;
        info.textContent = "CPU chose PAPER. PAPER beats ROCK! You lose!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
        let roundWinner = 'computer';
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        playerScore++;
        info.textContent = "CPU chose PAPER. SCISSORS beats PAPER! You win!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
        let roundWinner = 'player';
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        computerScore++;
        info.textContent = "CPU chose SCISSORS. SCISSORS beats PAPER! You lose!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
        let roundWinner = 'computer';
        return roundWinner;
    }
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
        playerScore++;
        info.textContent = "CPU chose SCISSORS. ROCK beats SCISSORS! You win!";
        score.textContent = `playerScore: ${playerScore}, computerScore: ${computerScore}`;
        let roundWinner = 'player';
        return roundWinner;
    }
    else return;
}

