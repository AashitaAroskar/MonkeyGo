var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;

  ground = createSprite(450, 375, 900, 60);
  ground.velocityX=-4;
  ground.x=ground.width/2;
    
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("blue");
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  if(keyDown("space") && monkey.y >=100) {
      monkey.velocityY =-12;
  }
  
  monkey.velocityY = monkey.velocityY + 1
  monkey.collide(ground);
  fruits();
  obstacles();
  
  stroke("white");
  textSize(10);
  fill("white");
  text("Score"+ score, 300, 50)
  
  stroke("black");
  textSize(10);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time"+ survivalTime, 100, 50);
  drawSprites();
}

function fruits() {
  if (frameCount % 80 === 0) {
    fruit = createSprite(600,100,40,10);
    fruit.y = Math.round(random(120,200));
    fruit.addImage(bananaImage);
    fruit.scale = 0.1;
    fruit.velocityX = -6;
    
    fruit.lifetime = 130;
    
    //adding cloud to the group
   foodGroup.add(fruit);
  }
}

function obstacles() {
  if(frameCount %60 === 0) {
    stone = createSprite(375, 100, 40, 20);
    stone.y = Math.round(random(315, 355));
    stone.addImage(obstacleImage);
    stone.scale = 0.1;
    stone.velocityX = -6;

    stone.lifetime = 300;
  }
}