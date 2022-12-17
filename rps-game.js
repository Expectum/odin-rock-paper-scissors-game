console.log("Hello");
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return rps[random];
}

let playerInput = window.prompt("Enter rock, paper or scissors.","");
let char = playerInput.charAt(0).toUpperCase();
let playerSelection = char + playerInput.toLowerCase().slice(1);
let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    return ("You Draw! " + computerSelection + " ties with " + playerSelection + ".");
} else if (((playerSelection == "Paper") && (computerSelection == "Rock")) || 
((playerSelection == "Rock") && (computerSelection == "Scissors")) || 
((playerSelection == "Scissors") && (computerSelection == "Paper"))){
    return ("You Win! " + playerSelection + " beats " + computerSelection + ".");
} else {
    return ("You Lose! " + computerSelection + " beats " + playerSelection + ".");
}};
console.log(playRound(playerSelection, computerSelection));