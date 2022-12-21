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
let playerScore = 0;
    function getComputerChoice() {
        let rps = ["Rock", "Paper", "Scissors"];
        const random = Math.floor(Math.random() * 3);
        return rps[random];
    }
    let computerSelection = getComputerChoice();
    let playerInput = window.prompt("Enter rock, paper or scissors.","");
    let char = playerInput.charAt(0).toUpperCase();
    let playerSelection = char + playerInput.toLowerCase().slice(1);
    playerScore = playRound(playerSelection, computerSelection, playerScore);
}     if (playerScore > 2) {
    console.log("You Win the Game!");
} else {
    console.log("You Lose the Game!");
}
game();

