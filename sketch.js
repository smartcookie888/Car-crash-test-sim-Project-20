var car1, car2, car3, car4, wall1, wall2;
var speed, weight, speed2, weight2;
function setup() {
  createCanvas(1600,600);
  wall1 = createSprite(1500, 200, 100, height/3)
  car1 = createSprite(50, 200, 50, 25)
  wall2 = createSprite(1500, 500, 100, height/3)
  car2 = createSprite(50, 500, 50, 25)
  speed = random(55, 90);
  weight = random(400, 1500);
  speed2 = random(55, 90);
  weight2 = random(400, 1500);
  car1.velocityX = speed;
  car2.velocityX = speed2;
}

function draw() {
  background(255,255,255);
  if (wall1.x - car1.x < (car1.width + wall1.width) / 2){
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation >= 180){
      car1.shapeColor = color(255, 0, 0)
    } else if (deformation < 180 && deformation > 100){
      car1.shapeColor = color(255, 255, 0)
    }else if (deformation < 100){
      car1.shapeColor = color(0, 255, 0)
    }}
  if (wall2.x - car2.x < (car2.width + wall2.width) / 2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight2 * speed2 * speed2 / 22500;
    if (deformation >= 180){
      car2.shapeColor = color(255, 0, 0)
    } else if (deformation < 180 && deformation > 100){
      car2.shapeColor = color(255, 255, 0)
    }else if (deformation < 100){
      car2.shapeColor = color(0, 255, 0)
    }}
  drawSprites();
}