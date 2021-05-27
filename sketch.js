var fixedRect,movingRect;
function setup() {
  createCanvas(1200,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x)
  //(x-200 < 25+40)
  //(x-200 < 65)

  //(200-x < 65)

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ) {
    movingRect.shapeColor = "lightblue"
    fixedRect.shapeColor = "lightblue"
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red"
  }

  drawSprites();
}
