console.log("Hello");
function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    console.log(random, rps[random]);
}

getComputerChoice();