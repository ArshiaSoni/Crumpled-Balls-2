const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(130, 200, 20);
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground); 
	 dustbin = new Dustbin(650, 640)
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  drawSprites();

  fill ("brown");
  rect (ground.position.x, ground.position.y, width, 10);

  paper.display();
  dustbin.display();
}

function keyPressed() {
	if (keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position ,{x:40,y:-100});

	}
}




