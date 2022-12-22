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
function game() {

    let computerSelection = getComputerChoice();
    let playerInput = window.prompt("Enter rock, paper or scissors.","");
    let char = playerInput.charAt(0).toUpperCase();
    let playerSelection = button1 || button2 || button3;
    playerScore = playRound(playerSelection, computerSelection, playerScore);
}     
function getScore(playerScore, computerScore) {
    div.textContent = `${playerScore} - ${computerScore}`;
}
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return rps[random];
}
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const div = document.createElement('div');
let playerSelection;
button1.addEventListener('click', () => {
    playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection,computerSelection, playerScore, computerScore, playerScore, computerScore);
    getScore(playerScore,computerScore);
});
button2.addEventListener('click', () => {
    playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection,computerSelection, playerScore, computerScore);
    getScore(playerScore,computerScore);
});
button3.addEventListener('click', () => {
    playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    [playerScore, computerScore] = playRound(playerSelection,computerSelection, playerScore, computerScore);
    getScore(playerScore,computerScore);
});
container.appendChild(button1);    
container.appendChild(button2);     
container.appendChild(button3);   
container.appendChild(div);     

