var player


function preload(){
playerImg=loadAnimation("img/man1.png","img/man2.png","img/man3.png","img/man4.png","img/man5.png","img/man6.png")
bgImg=loadImage("bg1.png");
}

function setup() {
  var canvas= createCanvas(1000,500);
  canvas.position(280,120)
  
  

  bg=createSprite(500,200,800,400)
  bg.addImage("bg",bgImg)
  
  player=createSprite(200,250)
  player.addAnimation("pImg",playerImg)
  player.scale=2
 
}

function draw() {
  background("bg.jpg");



 drawSprites();
  }