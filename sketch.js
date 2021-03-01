const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimg,mons1img,mons2igm,heroigm;

function preload() {
backgroundimg=loadImage("images/GamingBackground.png")
mons1img=loadImage("images/Monster-01.png")
mons2img=loadImage("images/Monster-02.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

   ground1=new ground(480,500,980,20)
   hero1=new hero(200,370,400,250);
   monster1=new monster(860,370,300,300);
   fly1=new fly(hero1.body,{x:200, y:50});

    box1 = new Box(450,100,70,70);
    box2 = new Box(450,100,70,70);
    box3 = new Box(450,100,70,70);
    box4 = new Box(450,100,70,70);
    box5 = new Box(450,100,70,70);
    box6 = new Box(450,100,70,70);

    box7 = new Box(560,100,70,70);
    box8 = new Box(560,100,70,70);
    box9 = new Box(560,100,70,70);
    box10 = new Box(560,100,70,70);
    box11 = new Box(560,100,70,70);
    box12 = new Box(560,100,70,70);
    
    box13 = new Box(670,100,70,70);
    box14 = new Box(670,100,70,70);
    box15 = new Box(670,100,70,70);
    box16 = new Box(670,100,70,70);
    box17 = new Box(670,100,70,70);
    box18 = new Box(670,100,70,70);
    box19 = new Box(670,100,70,70);
    box20 = new Box(670,100,70,70);
}

function draw() {
  if(backgroundimg)
  background(backgroundimg);
  Engine.update(engine);

  ground1.display();
  hero1.display();
  monster1.display();
  fly1.display();

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
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}

