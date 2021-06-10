var database;
var gamestate;
var login, form, player;
var playerCount;
var playerDet = [];
var player1, player2, player3, player4;
var playerAll = [];

function setup() {
  
    createCanvas(500, 500)

database = firebase.database();

login = new Game();

login.getGameState();

login.startGame();

}

  function draw() {

    player.getPlayerCount();

    login.getGameState();

    if(playerCount === 4 && gamestate === 1) {

      login.updateGameState(2);
      
      gamestate = 2;

      //login.playGame();    
    }
    if(gamestate === 2) {
      login.playGame();
  }
}