const choices = ['rock', 'paper', 'scissors']
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++){
        playRound();
    }
}

function playRound(){
const playerSelection = playerChoice();

const computerSelection = computerChoice();

const winner = checkWinner(playerSelection, computerSelection)

winners.push(winner)

}

function playerChoice(){
let input = prompt('Type rock, paper, scissors');
while (input == null){
    input = prompt('Type rock, paper, scissors')
}
input = input.toLowerCase();
let check = validateInput(input)
while (check == false){
    input = prompt("You need to enter something valid!")
    check = validateInput(input)
}
input = input.toLowerCase()
return input
}

function computerChoice(){
return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    }
    else if(
        (choiceP === 'rock' && choiceC === 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
    ){
        return 'Player';
    }
    else{
        return 'Computer';
    }

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results: ');
    console.log('Player Wins ', playerWins);
    console.log('Computer wins: ', computerChoice);
    console.log('Ties: ', ties);
}
}
game()