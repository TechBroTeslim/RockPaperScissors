function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

let playerScore = 0;
let computerScore = 0;

function game(playerSelection, computerSelection){
   
   playerSelection = prompt('choose your weapon').toLowerCase();
   console.log(`Your Weapon is ${playerSelection}`)
   computerSelection = getComputerChoice();
   console.log(`Computer Weapon is ${computerSelection}`);

   if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You Lose! Paper beats Rock');
        computerScore++
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)

   }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You Win! Rock beats Scissors');
        playerScore++
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)

   }else if ((playerSelection === 'rock' && computerSelection === 'rock')||(playerSelection === 'paper' && computerSelection === 'paper')||(playerSelection === 'scissors' && computerSelection === 'scissors')){
        console.log("It's a Tie");
        playerScore++; computerScore++;
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)

   }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You Win! Paper beats Rock');
        playerScore++
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)

   }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You Lose! Scissors beats Paper');
        computerScore++
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)

   }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You Win! Scissors beats Paper');
        playerScore++
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)

   }else {
        console.log('You Lose! Rock beats Scissors');
        computerScore++
        console.log(`your score is ${playerScore} and computer is ${computerScore}`)
   }
   
}


function loop(){
    let i = 0;
   do{
    game()
    console.log('new round')
    i++
   }while(i<5)
   if(playerScore > computerScore){
    alert(`You Won!!! Final score is: your score ${playerScore} - ${computerScore} computer score`);
}else {
    alert(`You Lose!!! Final score is: your score ${playerScore} - ${computerScore} computer score`);
}

}




loop()