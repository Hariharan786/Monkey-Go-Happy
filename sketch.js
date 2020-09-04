
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,198,1500,20);
  ground.velocityX=-2;
  ground.x = ground.width /2;
  
  invisibleGround = createSprite(200,205,1500,20);
  invisibleGround.visible  = false;
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0;
}


function draw() {
  background(180);
//console.log(monkey.y)
  text("Survial Time: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/60.5);
  
 if(keyDown("space")&& monkey.y >= 159) {
        monkey.velocityY = -12;
         console.log(monkey.y)
 } 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
 
  
  bananas();
  obstacles();
  
  drawSprites();
}

function bananas(){
 if (frameCount % 80 === 0){
  banana = createSprite(450,12,40,40);
  banana.addImage("ba", bananaImage);
  banana.y = Math.round(random(55,100));
  banana.scale=0.1;
  banana.velocityX=-7;
  banana.lifetime = 100;
   
   
   FoodGroup.add(banana);
}
}

function obstacles(){

if (frameCount % 300 === 0){
  obstacle = createSprite(580,170,10,40);
  obstacle.addImage("obi",obstaceImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-7;
  obstacle.lifetime = 100;

}
}






