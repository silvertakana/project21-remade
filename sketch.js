var box1,box2,box3,box4;
var movingBox;
function preload(){

}
function setup(){
  createCanvas(windowWidth, windowHeight);
  box1 = createSprite(250,windowHeight-100,200,50);
  box2 = createSprite(500,windowHeight-100,200,50);
  box3 = createSprite(750,windowHeight-100,200,50);
  box4 = createSprite(1000,windowHeight-100,200,50);
  box1.shapeColor = "green";
  box2.shapeColor = "yellow";
  box3.shapeColor = "red";
  box4.shapeColor = "blue";
  movingBox = createSprite(1250,windowHeight-100,100,100);
  movingBox.velocityY = random(-10,10)
  movingBox.velocityX = random(-10,10)
}
function draw(){
  background("lightBlue");
  /*movingBox.x = mouseX;
  movingBox.y = mouseY;*/
  bounceOffEdges(movingBox);
  switchcolor(movingBox,box1);
  switchcolor(movingBox,box2);
  switchcolor(movingBox,box3);
  switchcolor(movingBox,box4);
  drawSprites();
}
function bounceOffEdges(obj){
  if(obj.x>(canvas.width-(obj.width/2))||obj.x<(0+(obj.width/2)))
    obj.velocityX *= -1;
    console.log("side");
  if(obj.y>(canvas.height-(obj.height/2))||obj.y<(0+(obj.height/2)))
    obj.velocityY *= -1;
    console.log("top");
}
function switchcolor(obj1,obj2){
  if(obj1.isTouching(obj2)){
    obj1.shapeColor = obj2.shapeColor;
  }
  obj1.bounceOff(obj2)
}