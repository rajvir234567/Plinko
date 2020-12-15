const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var world, engine, bodies;
var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(490,800);

  engine = Engine.create();
  world = engine.world;
  body = Bodies
  
  ground = new Ground(245,800,490,20);
  wall1 = new Ground(490,400,20,800);
  wall2 = new Ground(0,400,20,800);

  for(var i = 0;i <= 490;i = i + 70){
    division = new Division(i,800-divisionHeight/2,20,divisionHeight);
    divisions.push(division);
  }
    

}
function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

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

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  for(var i = 0;i < particles.length; i = i + 1){
    particles[i].display();
  }
}