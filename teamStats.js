const team = { 
  _players: [],
  _games: [], 

  get players() {
    return this._players; 
  }, 
  get games(){
    return this._games; 
  }, 

  addPlayer(newFirstName, newLastName, newAge){
    const player = {
      firstName: newFirstName, 
      lastName: newLastName, 
      age: newAge
    }; 

    this._players.push(player); 
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent, 
      teamPoints: newTeamPoints, 
      opponentPoints: newOpponentPoints 
    }; 

    this._games.push(game); 
  }
}; 

//factory function 
const player = (firstName, lastName, age) => {
  return {
    firstName, 
    lastName, 
    age 
  }
}; //to create multiple team player 

const game = (opponent, teamPoints, opponentPoints) => {
  return {
    opponent, 
    teamPoints, 
    opponentPoints
  }
}; //to create multiple game 



//------------------RUNNING----------------- 

//populate 3 players 
const player1 = player('Ben', 'Brooke', 25); 
const player2 = player('Matt', 'Blanc', 20); 
const player3 = player('Dan', 'Julez', 23); 
team._players.push(player1);
team._players.push(player2);
team._players.push(player3);

//populate 3 players 
const game1 = game('Bull Dogs', 4, 2); 
const game2 = game('Dragons', 2, 3); 
const game3 = game('Dolphins', 2, 2); 
team._games.push(game1);
team._games.push(game2);
team._games.push(game3);

//using methods 
team.addPlayer('Bugs', 'Bunny', 76); 
console.log(team.players); 

team.addGame('Titans', 100, 98); 
console.log(team.games); 
