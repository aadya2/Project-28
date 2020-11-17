
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var backgroundImg;
var boyImg, boy;
var stone;

function preload()
{
	backgroundImg = loadImage("images/Plucking mangoes/backyard.jpg")
    boyImg = loadImage("images/Plucking mangoes/boy.png"); 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();  
  
  boy = createSprite(150, 560, 20, 20);
  boy.addImage(boyImg); 
  boy.scale = 0.13;

  stone = new Stone(100, 540);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 
  
 
  stone.display();
  ground.display();
  drawSprites();
 
}



