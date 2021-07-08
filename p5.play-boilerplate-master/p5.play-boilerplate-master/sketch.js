var bath,brush,drink,eat,gym,move,sleep;
var issImage;
var astronaut;
var iss;
function preload(){
bath = loadAnimation("assets/bath1.png", "assets/bath2.png");
brush = loadImage("assets/brush.png");
drink = loadAnimation("assets/drink1.png","assets/drink2.png");
eat = loadAnimation("assets/eat1.png","assets/eat2.png");
gym = loadAnimation("assets/gym1.png", "assets/gym2.png","assets/gym11.png","assets/gym12.png");
issImage = loadImage("assets/iss.png");
move = loadAnimation("assets/move.png","assets/move1.png");
sleep = loadImage("assets/sleep.png");
}

function setup() {
  createCanvas(600,600);
  iss = createSprite(300,300);
  iss.addImage("iss",issImage);
 astronaut = createSprite(400, 200, 50, 50);
 astronaut.addImage("sleeping", sleep);
astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  var edges = createEdgeSprites();
  astronaut.bounceOff(edges[2]);

  if(keyDown(UP_ARROW)){
    astronaut.addImage("brushing",brush);
    astronaut.changeImage("brushing",brush);
    astronaut.y = 50;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming",gym);
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating",eat);
  astronaut.x = 50;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing",bath);
  astronaut.x = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving",move);
  astronaut.velocityX=4;
  astronaut.velocityY=4;
}

  text("Instructions:",20,300);
  text("Up Arrow = Brush",20,320);
  text("Down Arrow = Gymming",20,340);
  text("Left Arrow = Eating",20,360);
  text("Right Arrow = Bathing",20,380);
  text("m key = moving",20,400);

  drawSprites();
}