const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone1,iron,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone1=new Stone(110,400,)

    iron=new Iron(600,200);

    rubber=new Rubber(190,100,20);

    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    iron.display();
    rubber.display();


    
 
}