const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
  if(userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors' && userInput !== 'bomb'){
    console.log('Invalid choice. Please choose again.'); 
  }
  return userInput; 
}; 

const getComputerChoice = () => {
  const choice = Math.floor(Math.random()*3); 
  switch(choice){
    case 0: 
      return 'rock'; 
    case 1: 
      return 'paper'; 
    default: 
      return 'scissors'; 
  }
}; 

const determineWinner = (userChoice, computerChoice) => {
  //a tie 
  if(userChoice === computerChoice){
    return 'This is a tie.'; 
  }

  //userChoice: rock 
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The winner is the computer.'; 
    } else {
      return 'The winner is the user.'; 
    }
  }

  //userChoice: paper 
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The winner is the computer.'; 
    }
    else{
      return 'The winner is the user.';
    }
  }

  //userChoice: scissors 
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The winner is the computer.'; 
    }
    else {
      return 'The winner is the user.';
    }
  }

  //cheat code
  if(userChoice === 'bomb'){
    return 'The winner is the user.'; 
  } 
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log(`The winner choice is ${userChoice} and the computer choice is ${computerChoice}.`); 

  console.log(determineWinner(userChoice, computerChoice));  
}

playGame(); 
