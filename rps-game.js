console.log("Hello");
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return rps[random];
}

let userInput = window.prompt("Enter rock, paper or scissors.","");
let char = userInput.charAt(0).toUpperCase();
let userSelection = char + userInput.toLowerCase().slice(1);
let computerSelection = getComputerChoice();

console.log(computerSelection, userSelection);