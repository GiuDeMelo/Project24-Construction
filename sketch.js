const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var rock;

///////////////////////////////////////////
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(600,300);
    rubber = new Rubber(400,100,100);
    iron = new Iron(600,100);
    rock = new Rock (800,100);

}

///////////////////////////////////////////
function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    rock.display();

}