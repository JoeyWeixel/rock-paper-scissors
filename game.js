function computerPlay(){
    let random = Math.floor(Math.random()*3)
    if(random === 2) return "Rock";
    else if(random === 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    let isPlayerWin = true;
    if(playerSelection === computerSelection) return "Its a tie!";
    if(playerSelection === "Rock" && computerSelection === "Paper") isPlayerWin = false;
    if(playerSelection === "Paper" && computerSelection === "Scissors") isPlayerWin = false;
    if(playerSelection === "Scissors" && computerSelection === "Rock") isPlayerWin = false;

    return (isPlayerWin ? ("You Win! " + playerSelection + " beats " + computerSelection) : ("You Lose! " + computerSelection + " beats " + playerSelection));
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i=0; i<5; i++){
        let output = playRound(prompt("Rock Paper or Scissors?"),computerPlay());
        console.log(output);
        if (output[4] === "W") playerWins++;
        if (output[4] === "L") computerWins++;
    }
    return playerWins>computerWins ? "Player wins!": "Computer wins!"
}

console.log(game())