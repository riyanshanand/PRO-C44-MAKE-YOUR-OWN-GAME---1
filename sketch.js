var trex;
var ground;
var bg;
var bgImage;

function preload(){
bgImage = loadImage("tower.png")
}
function setup(){
  createCanvas(900,620)
  ground = createSprite(450,310,900,620)
  ground.shapeColor = "Black"
  ground.velocityX = -5
  trex = createSprite(250,520,50,50)
  bg = createSprite(450,310,900,450)
  bg.addImage("tower",bgImage)
  bgImage.scale = 500
}

function draw(){
  background(0)

  if(ground.x<450){
    ground.x = 450
  }
  drawSprites()
}