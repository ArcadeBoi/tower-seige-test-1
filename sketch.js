const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var engine, world;
var hex;
var chain;
var ground, ground2, g1;


function setup() {
  createCanvas(1500,400);

  engine = Engine.create();
  world = engine.world;


//bodies here
block8 = new Block(1030,235,30,40);
block9 = new Block(1060,235,30,40);
block10 = new Block(1090,235,30,40);
block11 = new Block(1120,235,30,40);
block12 = new Block(1150,235,30,40);
block13 = new Block(1060,195,30,40);
block14 = new Block(1090,195,30,40);
block15 = new Block(1120,195,30,40);
block16 = new Block(1090,155,30,40);
hex = new Hexa (200, 200, 50, 50);
chain = new Chain(hex.body,{x:200,y:200});
ground = new Ground(800,10,1800,20);
ground2 = new Ground(800,390,1800,20);
g1 = new Ground(1090,260,150,20)

}

function draw() {
  background("grey");  
  Engine.update(engine);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  hex.display();
  chain.display();
  ground.display();
  ground2.display();
  g1.display();
  drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY})
    
}

function mouseReleased(){
    chain.fly();
}