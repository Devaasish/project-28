const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, img, img1;

function preload(){
    img = loadImage("tree.png");
    img1 = loadImage("boy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 307, 300, 160);

    box1 = new Box(700,220,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    box5 = new Box(810,160,70,70);

    bird = new Bird(80,60);

    slingShot = new Slingshot(bird.body, {x:80, y:50});

    //chain = new Chain(bird.body,log6.body);
}

function draw(){
    background(230);

    image(img,500,0,500,500);
    image(img1,40,0,300,300);

    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();

    box3.display();
    box4.display();
    pig3.display();

    box5.display();

    bird.display();
    platform.display();
    slingShot.display();
    //chain.display();    
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}