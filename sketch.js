var bullet, speed, weight, wall, damage , thickness;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 150, 30, 10);
    bullet.shapeColor = "purple";
    bullet.depth = 2;
  wall = createSprite(1300, 250, thickness, 300);
    wall.shapeColor = "black";
    wall.depth = 2;
}

function draw() {
  background("lightgreen");

  damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

  if (keyDown("space")){
    bullet.velocityX = speed;
  }
  if((wall.x- bullet.x< wall.width/2+bullet.width/2)&&(damage < 10))
  {
    bullet.velocityX= 0;
    wall.shapeColor = "green";
    console.log(damage);
    
  }
  if((wall.x- bullet.x< wall.width/2+bullet.width/2)&&(damage > 10))
  {
    bullet.velocityX= 0;
    wall.shapeColor = "red";
    console.log(damage);
    
  }
 


  drawSprites();
}