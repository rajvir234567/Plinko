const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var world, engine, bodies;
var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particles = [];
var score = 0;
var particle;
var turn = 0;
var gameState = "PLAY";
var gameState = "END";

function setup() {
  createCanvas(490,800);

  engine = Engine.create();
  world = engine.world;
  body = Bodies;
  
  ground = new Ground(245,800,490,20);
  wall1 = new Ground(490,400,20,800);
  wall2 = new Ground(0,400,20,800);
  line = new Line(240,450,800,5);

  for(var i = 0;i <= 490;i = i + 70){
    division = new Division(i,800-divisionHeight/2,20,divisionHeight);
    divisions.push(division);
  } 
}
function draw() {
  background(0);  

  text("500",20,600);
  text("500",90,600);
  text("500",160,600);
  text("500",230,600);
  text("100",300,600);
  text("100",370,600);
  text("200",440,600);

  textSize(30)
  text("Score : ",10,25);

  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();
  line.display();

  for(var i = 0;i < divisions.length; i = i + 1){
    divisions[i].display();
  }
  for(var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i,75,10));
  }
  for(var i = 15; i <= width-10; i = i + 50){
    plinkos.push(new Plinko(i,175,10));
  }
  for(var i = -10; i <= width-20; i = i + 50){
    plinkos.push(new Plinko(i,275,10));
  }
  for(var i = -35; i <= width-30; i = i + 50){
    plinkos.push(new Plinko(i,375,10));
  }
  for(var i = 0;i < plinkos.length; i = i + 1){
    plinkos[i].display();
  }
  
  mousePressed();
  
  if(gameState !== "END"){
    particle = new Particle(mouseX, 10, 10);
  }
  if(particle != null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.y < 300){
        score = score + 500;
        particle = null;
        turn = turn + 1;
        if (turn >= 5){ 
          gameState = "END";
        }
      }
    }
  }
  if(particle.body.position.y > 300){
    if(particle.body.position.y < 370){
      score = score + 100;
      particle = null;
      turn = turn + 1;
      if(turn >= 5){
        gameState = "END";
      }
    }
  }

  if(particle.body.position.y > 370){
    if(particle.body.position.y < 440){
      score = score + 100;
      particle = null;
      turn = turn + 1;
      if(turn >= 5){
        gameState = "END";
      }
    }
  }
  
  if(gameState === "END"){
    textSize(50);
    text("GAME OVER",245, 400);
  }
}

function mousePressed(){
  if(keyCode === 32){
    particle.x = particle.x - 1;
  }
}