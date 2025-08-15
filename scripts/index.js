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

function logScore(){
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.style.color = "blue";

    // adds several style rules
    content.style.cssText = "color: blue; background: white;";

    // adds several style rules
    content.setAttribute("style", "color: blue; background: white;");
    content.classList.add("content");
    content.textContent = "Human Score: " + humanScore + "\nComputer Score: " + computerScore;

    container.appendChild(content);
}

const playButton = document.querySelector("#playRound");
playButton.addEventListener("click", () => {
    console.log("Button works! accessing playGame");
    playGame();
    logScore();
});