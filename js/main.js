var humanScore = 0;
var computerScore = 0;

function play (humanPlay, computerPlay) {
  console.log ('You played ' + humanPlay + '. The bot played ' + computerPlay + '.');
  if (humanPlay === computerPlay) {
    console.log ('You tied.')
  }
  else if (humanPlay == 'paper' && computerPlay == 'rock' || humanPlay == 'rock' && computerPlay == 'scissors' || humanPlay == 'scissors' && computerPlay == 'paper'){
    console.log('You win! :)');
    humanScore += 1;
  }
  else {
    console.log ('You lose! :/');
    computerScore += 1;
  }
  console.log ('You have ' + humanScore + ' points.');
  console.log ('The bot has ' + computerScore + ' points.');
  if (humanScore == 3) {
    console.log('Congratulations! You have won the game!');
  }
  else if (computerScore == 3) {
    console.log('Sorry, you have lost the game. The computer wins 3 to ' + humanScore + '.')
  }
}

play('rock', 'rock');
play('rock', 'paper');
play('scissors', 'paper');
play('rock', 'scissors');
play('paper', 'rock');



// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
