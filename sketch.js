var sea, ship
var shipImg, seaImg

function preload(){ 
shipImg=loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");
}

function setup(){
 createCanvas(400,400);

sea=createSprite(400,200);
sea.addImage("sea", seaImg);
sea.scale=0.3;
sea.velocityX=-4;

ship=createSprite(130,200,10,10);
ship.addAnimation("ship", shipImg);
ship.scale=0.2;

}

function draw() {
background("blue");

  if (sea.x<0){
  sea.x = sea.width/8;
  }

drawSprites();

}