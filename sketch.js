var a;
var circles=[];
var score = 0;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(800,800);
  stroke(255);
  engine = Engine.create();
  world = engine.world;
  
  polygon_img = loadImage("polygon.png");
  ground = new Ground(400,600,240,50);
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new Chain(polygon,{x:100,y:200});


  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  slingshot.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  text("Score: "+score,740,40);
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  box8.display(); 
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display(); 
  ground.display();
    
  a=a-1;
  
 text("x:" +mouseX,mouseX,mouseY);
 
 text("y:" +mouseY,mouseX+30,mouseY); 
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
Engine.update(engine);
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(polygon, {x: 100 , y: 200});
    slingshot.attach(polygon);
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}