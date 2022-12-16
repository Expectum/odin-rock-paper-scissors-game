console.log("Hello");
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return rps[random];
}

let computerSelection = getComputerChoice();

console.log(computerSelection);