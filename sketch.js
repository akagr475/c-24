const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,log;
var box1,box2,box3,box4,box5;
var pig1,pig2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    log=new Log(100,300,20,30)
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,20,70,70);
    box5 = new Box(810,160,70,70);
    pig1 = new Pig(200,200);
    pig2 = new Pig(810,220);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    log.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display(); 
    

    

    
 
}