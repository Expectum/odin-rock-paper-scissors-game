function playRound(playerSelection, computerSelection, playerScore) {
    if (playerSelection == computerSelection) {
        console.log("You Draw! " + computerSelection + " ties with " + playerSelection + ".");
        return playerScore;
    } else if (((playerSelection == "Paper") && (computerSelection == "Rock")) || 
    ((playerSelection == "Rock") && (computerSelection == "Scissors")) || 
    ((playerSelection == "Scissors") && (computerSelection == "Paper"))){
        console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
        return playerScore += 1;
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
        return playerScore;
    }};
function game() {

    let computerSelection = getComputerChoice();
    let playerInput = window.prompt("Enter rock, paper or scissors.","");
    let char = playerInput.charAt(0).toUpperCase();
    let playerSelection = button1 || button2 || button3;
    playerScore = playRound(playerSelection, computerSelection, playerScore);
}     
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return rps[random];
}
let playerScore = 0;
const container = document.querySelector('#container');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
let playerSelection;
button1.addEventListener('click', () => {
    playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection, playerScore);
});
button2.addEventListener('click', () => {
    playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection, playerScore);
});
button3.addEventListener('click', () => {
    playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection, playerScore);
});
container.appendChild(button1);    
container.appendChild(button2);     
container.appendChild(button3);        

