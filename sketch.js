const Engine = Matter.Engine; 
 const World = Matter.World;
   const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(500,500);

 engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  } 
  
ground = Bodies.rectangle(250,495,500,10,ground_options);
World.add(world,ground);

var ball_options = {
   restitution: 1
}

ball = Bodies.circle(250,100,20,ball_options);
World.add(world,ball);

}

function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,500,10);

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

}