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

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
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


function playGame() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
}

for(let i=0; i < 5; i++){
    playGame();
    if(i == 4) {
        console.log("Final score is: human " + humanScore + ", computer " + computerScore);
        if (humanScore > computerScore) {
            console.log("The human wins!");
        } else if(humanScore == computerScore){
            console.log("It's a tie!");
        } else {
            console.log("The computer wins!");
        }
    }
}