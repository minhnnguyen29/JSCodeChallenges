//Variable Declaration  
let userName = 'Minh'; 
let userQuestion = 'Would I be lucky today?'; 
const randomNum = Math.floor(Math.random()*8); 
let eightBall = ''; 

//Code 
userName === '' ? console.log('Hello!') : console.log(`Hello ${userName}`); 

console.log(userQuestion); 

switch(eightBall){
  case 0: 
    eightBall = 'It is certain'; 
    break;
  case 1: 
    eightBall = 'It is decidedly so'; 
    break;
  case 2: 
    eightBall = 'Reply hazy try again';
    break; 
  case 3: 
    eightBall = 'Can not predict now';
    break; 
  case 4: 
    eightBall = 'Do not count on it'; 
    break; 
  case 5: 
    eightBall = 'My sources say no'; 
    break; 
  case 6: 
    eightBall = 'Outlook not so good';
    break; 
  default: 
    eightBall = 'Signs point to yes';
    break; 
}

console.log(`Answer: ${eightBall}`);
