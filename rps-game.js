function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection == computerSelection) {
        console.log("You Draw! " + computerSelection + " ties with " + playerSelection + ".");
        return [playerScore, computerScore];
    } else if (((playerSelection == "Paper") && (computerSelection == "Rock")) || 
    ((playerSelection == "Rock") && (computerSelection == "Scissors")) || 
    ((playerSelection == "Scissors") && (computerSelection == "Paper"))){
        console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
        playerScore += 1;
        return [playerScore, computerScore];       
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
        computerScore += 1;
        return [playerScore, computerScore];
    }};
function getScore(playerScore, computerScore) {
    scoreDiv.textContent = `${playerScore} - ${computerScore}`;
}
function getWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        winnerDiv.textContent = "Congratulations! You won the game!";
        playerScore = 0;
        computerScore = 0;
        getScore(playerScore, computerScore);
        return [playerScore,computerScore];
    } else if (computerScore == 5) {
        winnerDiv.textContent = "Too bad! You lost!";
        playerScore = 0;
        computerScore = 0;
        getScore(playerScore, computerScore);
        return [playerScore,computerScore];
    }
    return [playerScore,computerScore];
}
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return rps[random];
}
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const scoreDiv = document.createElement('div');
const winnerDiv = document.createElement('div');
let playerSelection;
rockButton.addEventListener('click', () => {
    playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection,computerSelection, playerScore, computerScore, playerScore, computerScore);
    getScore(playerScore,computerScore);
});
paperButton.addEventListener('click', () => {
    playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection,computerSelection, playerScore, computerScore);
    getScore(playerScore,computerScore);
});
scissorsButton.addEventListener('click', () => {
    playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection,computerSelection, playerScore, computerScore);
    getScore(playerScore,computerScore);
    [playerScore, computerScore] = getWinner(playerScore,computerScore);
});
getScore(playerScore,computerScore);
container.appendChild(rockButton);    
container.appendChild(paperButton);     
container.appendChild(scissorsButton);   
container.appendChild(scoreDiv);     
container.appendChild(winnerDiv);  
