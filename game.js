let computerWins = 0;
let playerWins = 0;



function computerPlay(){
    let random = Math.floor(Math.random()*3);
    if(random === 2) return "rock";
    else if(random === 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection){
    computerSelection = computerPlay();
    let isPlayerWin = true;
    if(playerSelection === computerSelection) return;
    if(playerSelection === "rock" && computerSelection === "paper") isPlayerWin = false;
    if(playerSelection === "paper" && computerSelection === "scissors") isPlayerWin = false;
    if(playerSelection === "scissors" && computerSelection === "rock") isPlayerWin = false;

    isPlayerWin ? playerWins++ : computerWins++;
    return;

    //return (isPlayerWin ? ("You Win! " + playerSelection + " beats " + computerSelection) : ("You Lose! " + computerSelection + " beats " + playerSelection));
}

function game(e){
    const text = document.querySelector('.text');
    playRound(e.target.id);
    text.textContent = 'Player: ' + `${playerWins}` + ' Computer: ' + `${computerWins}`;
    if(playerWins === 5 || computerWins === 5){
        text.textContent = playerWins>=5 ? 'Player Wins!' : 'Computer Wins!';
    }
    return;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));