function computerPlay(){
    let random = Math.floor(Math.random()*3)
    if(random === 2) return "Rock";
    else if(random === 1) return "Paper";
    else return "Scissors";
}