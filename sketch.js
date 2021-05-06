const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine ,myworld;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground1,ground2;
var polygon,polygonimage;
var slingshot;

function preload(){
polygonimage = loadImage("polygon.png");

  

}


function setup(){
    createCanvas(800,700);
engine = Engine.create();
myworld = engine.world;

//level2
box1 = new Box(330,235);
box2 = new Box(360,235);
box3 = new Box(390,235);
box4 = new Box(420,235);
 box5 = new Box(450,235);

//level3
box6 = new Box(360,195);
box7 = new Box(390,195);
box8 = new Box(420,195);
//top
box9 = new Box(390,155);

ground1 = new Ground(400,650,800,20);
ground2 = new Ground(400,240,300,20);
polygon = Bodies.circle(150,100,20,{isStatic:true,restitution:0.8});
World.add(myworld,this.polygon);
slingshot = new SlingShot(this.polygon,{x:149,y:100});

Engine.run(engine);



}

function draw(){
    background(0);
Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();


ground1.display();
ground2.display();

//circleMode(RADIUS);


 
imageMode(CENTER);
image(polygonimage,polygon.position.x,polygon.position.y,40,40);


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


