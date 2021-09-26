var fixedRec, movingRec;
var rec1,rec2, rec3, rec4,rec5,rec6;
function setup() {
  createCanvas(800,400);
  fixedRec = createSprite(200,300); 
  movingRec = createSprite(600,300);

  rec1 = createSprite(50,100);
  rec2 = createSprite(750,100);

  rec1.shapeColor= "blue";
  rec2.shapeColor= "yellow";

  rec3 = createSprite(50,300);
  rec4 = createSprite(750,300);
  rec5 = createSprite(400,50);
  rec6 = createSprite(400,350);

  rec5.shapeColor= "black";
  rec6.shapeColor= "purple";

  rec5.velocityY = 2;
  rec6.velocityY = -2;  

rec1.velocityX = 2;
rec2.velocityX = -2;  

}

function draw() {
  background(255,255,255);
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY; 
  if(isTouching(rec3, movingRec)){
    movingRec.shapeColor = "Red";
    rec3.shapeColor = "Red"; 
  }
  else{
    movingRec.shapeColor = "Green";
   rec3.shapeColor = "Green"; 
  }
  if(isTouching(rec4, movingRec)){
    movingRec.shapeColor = "Red";
    rec4.shapeColor = "Red"; 
  }
  else{
    movingRec.shapeColor = "Green";
    rec4.shapeColor = "Green"; 
  }
  if(isTouching(fixedRec, movingRec)){
    movingRec.shapeColor = "Red";
    fixedRec.shapeColor = "Red"; 
  }
  else{
    movingRec.shapeColor = "Green";
    fixedRec.shapeColor = "Green"; 
  }
bounceOff(rec1,rec2);
bounceOff(rec5,rec6);
  drawSprites();
}


