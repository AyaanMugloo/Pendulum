
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(400,200,25);
	ball1 = new Ball(350,200,25);
	ball2 = new Ball(300,200,25);
	ball3 = new Ball(250,200,25);
	ball4 = new Ball(200,200,25);
	ball5 = new Ball(450,200,25);
	ball6 = new Ball(500,200,25);
	ball7 = new Ball(550,200,25);
	ball8 = new Ball(600,200,25);
	
	holder = new Holder(400,100,600,50);
	
	string = new String(holder.body,ball.body,0,0);
	string1 = new String(holder.body,ball1.body,-50,0);
	string2 = new String(holder.body,ball2.body,-100,0);
	string3 = new String(holder.body,ball3.body,-150,0);
	string4 = new String(holder.body,ball4.body,-200,0);
	string5 = new String(holder.body,ball5.body,50,0);
	string6 = new String(holder.body,ball6.body,100,0);
	string7 = new String(holder.body,ball7.body,150,0);
	string8 = new String(holder.body,ball8.body,200,0);
	
	line(50,60,ball.body);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  
  holder.display();
  
  string.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  string6.display();
  string7.display();
  string8.display();

  drawSprites();
}



