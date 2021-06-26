var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4, car1p, car2p, car3p, car4p,track;

function preload(){
  car1p=loadImage("images/car1.png");
  car2p=loadImage("images/car2.png");
  car3p=loadImage("images/car3.png");
  car4p=loadImage("images/car4.png");
  backgroundImage=loadImage("images/ground.png");
  track=loadImage("images/track.jpg")

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 // background(backgroundImage);
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
