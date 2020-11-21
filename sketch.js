var car,wall;
var speed,weight,deformation;
function setup() {
  createCanvas(1500,1500);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 300, 50, 50);
  car.shapeColor=("white");
  wall = createSprite(1200,300,60,height/2);

}

function draw() {
  background("black");  

 car.velocityX=speed;

if(wall.x - car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
    car.shapeColor=("green");
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=("yellow")
  }
  if(deformation<100){
    car.shapeColor=("red");
  }
}

  drawSprites();
}