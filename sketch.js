var coin, bomb, energyDrink;
var path, power, runner1, runner2;

function preload(){
  //imagens pré-carregadas
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path=createSprite(200,200);
  path.addImage(pathImg);
  
  runner = createSprite(130,200,30,30);
  runner.addAnimation("movingRunner",runnerImg);
  runner.scale = 0.05;
    
}

function draw() {
  background(0);
  path.velocityY = 5;
  //edges= createEdgeSprites();
  
  //leftBoudary.invisible = false;
  //leftBoudary.visible = true;
  //leftBoudary.invisible = true;
  //leftBoudary.visible = false;
  //rabbit.collide(edges);
  if(path.y > 400){
    path.y = height/2;
  }
  drawSprites();
}
