var fixedRect, movingRect;
var Ob1,Ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  Ob1 = createSprite(400,200,80,30);
  Ob1.shapeColor = "green";
  Ob2 = createSprite(400,200,80,30);
  Ob2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,Ob1))
  {
    movingRect.shapeColor = "red";
    Ob1.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

function isTouching( object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y  < fixedRect.height/2 + movingRect.height/2) {
      return true 
     
}
else {
  
   return false
}

}