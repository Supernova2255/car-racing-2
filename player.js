class Player {
    
    constructor(){

        this.id = 0;

        this.name = "";

        this.distance = 0;

    }
    
    getPlayerCount(){

    var playerRef = database.ref("playercount");

    playerRef.on("value", function(data){

    playerCount = data.val();

    });

    }
    
    updatePlayerCount(count){

    var referenceCount = database.ref("/");

        referenceCount.update({

            playercount:count

        });

    }
    
    savePlayer(){

        var playerIndex = "Players/player" + this.id
        
        var playerReference = database.ref(playerIndex)

        playerReference.update({
            id: this.id, 
            name: this.name, 
            distance: this.distance
        });

    }
    
     static getAllPlayers(){

        var playerref = database.ref("Players");

        playerref.on("value", 
        
        function(data){

        playerDet = data.val();
        
        })

    }

}