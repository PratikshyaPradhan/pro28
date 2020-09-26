const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,tree,boy1,stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    tree = new Tree(800,200);
    mango1 = new Mango(700,200,15);
    mango2 = new Mango(750,100,15);
    mango3 = new Mango(800,150,15);
    mango4 = new Mango(725,100,15);
    mango5 = new Mango(800,126,15);
    mango6 = new Mango(750,150,15);
    boy1 = new Boy(200,320);
    stone = new Stone(280,300,15);
    chain = new Slingshot(stone.body,{x:150,y:100});
}

function draw(){
    background("blue");
    Engine.update(engine);
    ground.display();
    boy1.display();
    tree.display();
    mango1.display(); 
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango3.display();
    stone.display();
    chain.display();

    detectcollision(mango1,stone);
    detectcollision(mango2,stone);
    detectcollision(mango3,stone);
    detectcollision(mango4,stone);
    detectcollision(mango5,stone);
    detectcollision(mango6,stone);
    
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

    chain.fly();
}
function detectcollision(bodyA,bodyB){
   var mangoBodyPosition=bodyA.body.position;
   var stoneBodyPosition=bodyB.body.position;

   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

   if(distance<=bodyA.radius+bodyB.radius){
        Matter.Body.setStatic(bodyB,false);
   }


}