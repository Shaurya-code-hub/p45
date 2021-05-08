  var bg;
  var Indian_soldier;
  var knife;
  var enemy, enemy2;
  var boss;
  

function preload(){
  bg = loadImage("images/BG4.jpg");
  Indian_soldierImg = loadImage("images/Indian soldier.png");
  enemyImg = loadImage("images/enemy.png");
  enemy2Img= loadImage("images/enemy2-removebg-preview.png");
  boss = loadImage("images/boss.jfif");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 120);

  Indian_soldier = createSprite(40,250,20,20);
  Indian_soldier.addImage(Indian_soldierImg);
  Indian_soldier.scale = 0.3;
}


function draw() {
  background(bg);  
 
  if(Indian_soldier.y > 0 && keyDown ("up_arrow")){
   Indian_soldier.y = Indian_soldier.y - 8;
  }

  if(Indian_soldier.y < displayHeight - 120 && keyDown ("down_arrow")){
    Indian_soldier.y = Indian_soldier.y + 8;  
  }
   
  if(Indian_soldier.x < displayWidth/4 && keyDown ("right_arrow")){
    Indian_soldier.x = Indian_soldier.x + 8;  
  }

  if(Indian_soldier.x > 0 ){
    if(keyDown ("left_arrow")){
      Indian_soldier.x = Indian_soldier.x - 8; 
    }
  }

  spawnEnemy();

   drawSprites();

  //  if(keydown ("space")){
  //  //spawnBullet();
    
  //  }
}
function spawnEnemy(){
  if(frameCount % 100 === 0 ){
    enemy = createSprite(displayWidth, Math.round(random(10,displayHeight - 150)));
    enemy.velocityX = -18;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: enemy.addImage(enemyImg);
              enemy.scale = 0.3;
              break;
      case 2: enemy.addImage(enemy2Img);
              enemy.scale = 0.3;
              break;
    }          
  }
}


