var wall,bullet;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 10, 5); 
  bullet.shapeColor="white"
  bullet.velocityX="3"
  wall=createSprite(500,200,12,height/2);
 
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
 
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletLeftEdge=lbullet.x+lbullet.width;
  wallRightEdge=lwall.x;
  if(bulletLeftEdge>=wallRightEdge){
    return true;
  }
  return false;
}