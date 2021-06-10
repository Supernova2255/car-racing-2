class Game {

    constructor(){

    }

    getGameState(){

var gamestateGet = database.ref("gamestate");

    gamestateGet.on("value", 
    
    function(data) {

        gamestate = data.val();

        }
    );
}

    updateGameState(count){

    var gamestateref = database.ref("/");

        gamestateref.update({

            gamestate:count
    })


        
    }

    startGame(){
        player = new Player();

        if(playerCount < 4) {

        form = new Form();
    
        player.getPlayerCount();

        form.showForm();    

        }else {

        player1 = createSprite(40, 40, 40, 40);

        player2 = createSprite(140, 40, 40, 40);

        player3 = createSprite(240, 40, 40, 40);

        player4 = createSprite(340, 40, 40, 40);


        player1.visible = false

        player2.visible = false

        player3.visible = false

        player4.visible = false
        

        playerAll = [player1, player2, player3, player4];
    }
}

    playGame(){

    Player.getAllPlayers();

    console.log(playerDet);

    if(playerDet !== undefined) {

    var index = 0 

    var x = 40

    var y;

    for(var p in playerDet){

    console.log(playerDet[p].name);

    index = index + 1

    x = x + 100;

    y = height - playerDet [p].distance;

    playerAll [index - 1].x = x

    playerAll [index - 1].y = y 

    playerAll [index - 1].visible = true

    if(index === player.id) {

    playerAll[index - 1].shapeColor = "red"

    }
        }
    }
drawSprites(); 
}


    endGame(){

    }
}