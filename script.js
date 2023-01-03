function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

function game(playerSelection, computerSelection){
   playerSelection = prompt('choose your weapon').toLowerCase();
   console.log(`Your Weapon is ${playerSelection}`)
   computerSelection = getComputerChoice();
   console.log(`Computer Weapon is ${computerSelection}`);

   if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You Lose! Paper beats Rock');

   }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You Win! Rock beats Scissors');

   }else if ((playerSelection === 'rock' && computerSelection === 'rock')||(playerSelection === 'paper' && computerSelection === 'paper')||(playerSelection === 'scissors' && computerSelection === 'scissors')){
        console.log("It's a Tie");

   }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You Win! Paper beats Rock');

   }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You Lose! Scissors beats Paper');

   }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    console.log('You Win! Scissors beats Paper');

   }else {
    console.log('You Lose! Rock beats Scissors');
   }
   
}

game()

