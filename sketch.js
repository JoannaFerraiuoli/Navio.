var sea;

var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  sea.addImage(seaImage);
  ship.addImage(shipImage);
}

function draw() {
  background("blue");

if(sea.x < 0 ){
 sea.x = sea.width/2;


}




    drawSprites();

 
}
