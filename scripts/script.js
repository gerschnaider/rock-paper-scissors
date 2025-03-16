function getComputerChoice() {
    let choice;
    switch (Math.ceil(Math.random() * 3)) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
    }

    return choice;
}

function comparator(choice1, choice2) {
    /* The function returns -1 if choices have an error ,0 if choice1 wins over choice2, 1 if its a tie, 2 if choice1 losses over choice2 */
    let result = -1;

    if (choice1 == choice2) result = 1;
    else if (choice1 == "rock") {
        //WINNERS AND LOSERS AGAINST ROCK
        if (choice2 == "paper") result = 2;
        else if (choice2 == "scissors") result = 0;
    } else if (choice1 == "paper") {
        //WINNERS AND LOSERS AGAINST PAPER
        if (choice2 == "scissors") result = 2;
        else if (choice2 == "rock") result = 0;
    } else if (choice1 == "scissors") {
        //WINNERS AND LOSERS AGAINST SCISSORS
        if (choice2 == "rock") result = 2;
        else if (choice2 == "paper") result = 0;
    }

    return result;
}

//LEGACY FUNCTIONS

function getHumanChoice() {
    //made case insensitive
    return prompt("Ingrese su jugada").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result = comparator(humanChoice, computerChoice);
    if (result == -1) console.error("There was a mistake in the input");
    else if (result == 0) {
        div_roundResult.textContent = `Player wins, ${humanChoice} beats ${computerChoice}`;
        playerScore++;
        div_playerScore.textContent = playerScore;
    } else if (result == 2) {
        div_roundResult.textContent = `Computer wins, ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        div_computerScore.textContent = computerScore;
    } else div_roundResult.textContent = "There was a tie!";
}

//Store regularly accessed elements from the DOM
let div_roundResult, div_playerScore, div_computerScore, div_winnerResult;
div_roundResult = document.querySelector(".roundResult");
div_playerScore = document.querySelector(".playerScore");
div_computerScore = document.querySelector(".computerScore");
div_winnerResult = document.querySelector(".winnerResult");

//add event listeners for buttons
let buttonRock, buttonPaper, buttonScissors;
buttonRock = document.querySelector("#buttonRock");
buttonPaper = document.querySelector("#buttonPaper");
buttonScissors = document.querySelector("#buttonScissors");

buttonRock.addEventListener("click", (event) => {
    playRound("rock", getComputerChoice());
});
buttonPaper.addEventListener("click", (event) => {
    playRound("paper", getComputerChoice());
});
buttonScissors.addEventListener("click", (event) => {
    playRound("scissors", getComputerChoice());
});

//Initialize global variables
let playerScore = 0,
    computerScore = 0;
