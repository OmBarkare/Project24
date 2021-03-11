
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, dustbin, rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paperball(50,400,30,30);
	ground = new Ground(400,550,800,10);
	rightWall = new Ground(800,300,8,800);
	dustbin = new Dustbin(700,540);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	ball.display();
	ground.display();
	dustbin.display();
	keyPressed();
	Engine.update(engine);
	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-10})
		}
	else if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:8,y:0})
	}
	else if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-8,y:0})
	}else{Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:0})}
}
