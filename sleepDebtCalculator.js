const getSleepHours = day => {
  let hoursOfSleep = 0; 

  //determine the hours of sleep needed based on what day 
  switch(day) {
    case 'Monday': 
      hoursOfSleep = 2; 
      break;
    case 'Tuesday':
      hoursOfSleep = 3;
      break; 
    case 'Wednesday':
      hoursOfSleep = 4; 
      break; 
    case 'Thursday':
      hoursOfSleep = 5; 
      break; 
    case 'Friday': 
      hoursOfSleep = 6; 
      break; 
    case 'Saturday': 
      hoursOfSleep = 7;
      break; 
    default: 
      hoursOfSleep = 8; 
      break;   
  }
  return hoursOfSleep; 
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 

const getIdealSleepHours = idealHours => idealHours*7; 

console.log(`The hours I sleep in total is ${getActualSleepHours()} hrs when I actually need ${getIdealSleepHours()} hrs.`);

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); 

  //determine if sleep debt 
  if(actualSleepHours == idealSleepHours){
    console.log('The user got the perfect amount of sleep.'); 
  } else if(actualSleepHours > idealSleepHours){
    console.log('The user got more sleep than needed.');
    console.log(`The user is getting ${actualSleepHours - idealSleepHours} hrs more.`)
  } else {
    console.log('The user should get some more rest.'); 
    console.log(`The user needs to sleep for ${idealSleepHours - actualSleepHours} hrs more.`);
  }
}

calculateSleepDebt(); 
