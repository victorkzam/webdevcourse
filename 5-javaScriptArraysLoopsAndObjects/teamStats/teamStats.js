const team = {
    _players: [ 
      {firstName: 'Marina', lastName: 'Jorge', age: 24,},
      {firstName: 'Victor', lastName: 'Kzam', age: 22,},
      {firstName: 'Leonardo', lastName: 'Santos', age: 26,},
      ],
    _games: [
      {opponent: 'Belenenses SAD', teamPoints: 4, opponentPoints: 0,},
      {opponent: 'SL Benfica', teamPoints: 2, opponentPoints: 0,},
      {opponent: 'Porto FC', teamPoints: 1, opponentPoints: 1,},
      ],
  
    // Getter methods for your _players and _games keys.
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    // The method should create a player object, and add them to the team‘s players array.
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      this._players.push(player);
    },
  
    // Similar method for recording game results called addGame.
    // It takes in an opponent’s name, your team’s points, the opponent’s points, creates a game object, adds the game object to your team‘s games array.
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      };
      this._games.push(game);
    },
  };
  
  // Invoke the addPlayer method and print out to check.
  team.addPlayer('Rafael', 'Zveiter', 18);
  team.addPlayer('Isadora', 'Montandon', 18);
  team.addPlayer('Luis', 'Filomeno', 22);
  
  // Invoke the addGame and print updated games.
  team.addGame('SC Braga', 2, 1);
  team.addGame('CS Marítimo', 0, 0);
  team.addGame('Boavista FC', 5, 1);
  
  // Log on console players and matches 
  console.log(team._players);
  console.log('');
  console.log(team._games);