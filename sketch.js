var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("images/track2.png");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bg = loadImage("images/bg2.jpg");
  pl1 = loadAnimation("images/A1.png","images/A2.png","images/A3.png");
  pl2 = loadAnimation("images/B1.png","images/B2.png","images/B3.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  abc = createSprite(400,500,10,10);
  abc.addAnimation("fwtdfte",pl1);
  abcd = createSprite(460,500,10,10);
  abcd.addAnimation("fwtdfvvhte",pl2);
}


function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
  drawSprites();
}
