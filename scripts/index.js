function getComputerChoice() {
    const randomNumber = Math.random();
    let chosenString;
    if (randomNumber < 0.33) {
        chosenString = "rock";
    } else if (randomNumber < 0.66) {
        chosenString = "paper";
    } else {
        chosenString = "scissors";
    }
    return chosenString;
}

function getHumanChoice() {
    let humanChoice = prompt("Let's play rock, paper, scissors! Type your choice: ");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function setComputerEmoji(computerChoice) {
    const computerContainer = document.querySelector("#computerChoice");

    if(computerChoice == "rock"){
        computerContainer.textContent = '🪨';
    } else if (computerChoice == "paper"){
        computerContainer.textContent = '📄';
    } else if(computerChoice == "scissors") {
        computerContainer.textContent = '✂️';
    } else {
        computerContainer.textContent = '❓';
    }
}

function setHumanEmoji(humanChoice) {
    const humanContainer = document.querySelector("#userChoice");

    if(humanChoice == "rock"){
        humanContainer.textContent = '🪨';
    } else if (humanChoice == "paper"){
        humanContainer.textContent = '📄';
    } else if(humanChoice == "scissors") {
        humanContainer.textContent = '✂️';
    } else {
        humanContainer.textContent = '❓';
    }
}

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    setHumanEmoji(lowerHumanChoice);
    setComputerEmoji(computerChoice);
    if (lowerHumanChoice === computerChoice) {
        console.log("You chose the same: " +lowerHumanChoice+ " It's a draw!");
    } else if ((lowerHumanChoice === "rock")) {
        if(computerChoice === "scissors") {
            console.log ("You win! " + lowerHumanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log ("You lose! " + lowerHumanChoice + " loses against " + computerChoice);
            computerScore++;
        }
    } else if (lowerHumanChoice === "paper") {
        if(computerChoice === "scissors") {
            console.log ("You lose! " + lowerHumanChoice + " loses against " + computerChoice);
            computerScore++;
        } else {
            console.log ("You win! " + lowerHumanChoice + " beats " + computerChoice);
            humanScore++;
        }
    } else {
         if(computerChoice === "paper") {
            console.log ("You win! " + lowerHumanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log ("You lose! " + lowerHumanChoice + " loses against " + computerChoice);
            computerScore++;
        }
    }
}


function playGame(humanChoice) {
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    logScore();
}

function logScore(){
    const computerScoreContainer = document.querySelector("#computerScore");
    const humanScoreContainer = document.querySelector("#userScore");

    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;

}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    logScore();
    setHumanEmoji('');
    setComputerEmoji('');
});