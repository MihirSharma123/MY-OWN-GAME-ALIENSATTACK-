var joe 
var alien
var bullets=60
var alienGroup
function preload(){
joe= loadImage("assets/boy.jpg")
alien= loadImage("assets/alien.jpg")

}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  joe=createSprite(400,200,50,50)
  joe.addImage(joe)
  joe.scale=0.3
  alienGroup=new Group()
  bulletGroup= new Group()

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(bulletGroup.istouching(alienGroup)){
  alienGroup.destroyEach()
}
if(keyDown("UP_ARROW")){
joe.y=joe.y-30
}
if(keyDown("DOWN_ARROW")){
joe.y=joe.y+30
}
if(keyDown("spacebar")){
bullet = createSprite(390,joe.y-30,20,10)
bullet.velocityX=30
bulletGroup.add(bullet)
joe.depth=bullet.depth
joe.depth=joe.depth+2
bullets=bullets-1 
}
}