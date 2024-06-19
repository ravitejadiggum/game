const choices = ["rock", "paper", "scissor"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const finalScoreDisplay = document.getElementById("finalScoreDisplay");

let playerScore = 0;
let ComputerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result="";

    if(playerChoice === computerChoice){
        result = "It's Tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "You Won!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Won!" : "You Lose!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You Won!" : "You Lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player:${playerChoice}`;
    computerDisplay.textContent = `computer:${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenText" , "redText");

    switch(result){
        case "You Won!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            playerScoreDisplay.classList.add("greenText");
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            ComputerScore++;
            computerScoreDisplay.textContent = ComputerScore;
            computerScoreDisplay.classList.add("redText");
            break
    }
    
}