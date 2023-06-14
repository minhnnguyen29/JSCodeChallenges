let raceNumber = Math.floor(Math.random() * 1000); //other runners 

let earlyRunner = true; //if the runner is early or not 

let runnerAge = 19; 

//raceNumber for early adult runner 
if(earlyRunner && runnerAge > 18){
  raceNumber += 1000; //early adult runners has race number >= 1000
}

//check age + rego time to determine race time 
if(runnerAge > 18 && earlyRunner){
  console.log(`Hi runner ${raceNumber}, you will race at 9:30 am.`); 
} else if(runnerAge > 18 && !earlyRunner){
  console.log(`Hi runner ${raceNumber}, you will race at 11:00 am.`); 
} else if (runnerAge < 18) {
  console.log(`Hi runner ${raceNumber}, you will race at 12:30 pm.`); 
} else {
  console.log(`Hi runner ${raceNumber}, please see the registration desk for your race time.`); 
}
