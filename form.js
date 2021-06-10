class Form {

    constructor() {

    }

    showForm() {
        
var header = createElement("h2");
header.html("CAR RACING GAME");
header.position(130, 50);
var name = createInput('name');
var button = createButton('play');
name.position(130, 200)
button.position(130, 240)
var welcomeMessage = createElement("h3");
welcomeMessage.position(150, 250);
button.mousePressed(function(){
    
    //console.log(name.value())
    name.hide();
    button.hide(); 

    playerCount = playerCount + 1;
    player.id = playerCount;
    player.name = name.value();    
    player.savePlayer();
    player.updatePlayerCount(playerCount);

    welcomeMessage.html("welcome to the game " + name.value());

    })
}}
