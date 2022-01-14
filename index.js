
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
let dominos = [];
let ground;
let ball;

const box_width = 10;
const box_height = 160;
function setup(){ // inbuilt to p5
    createCanvas(1600, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); // bit like saying "continually update"

    ground = Bodies.rectangle(600, height -50, width, 100, {
        isStatic: true,
        friction: 1
    });
    drawCircle();
    drawDominos();

    Matter.Body.applyForce(ball.body, { x: ball.body.position.x, y: ball.body.position.y },  { x: 10, y: 0 });
    World.add(world, ground); // adding ground to physics world

}

function drawCircle(){
    ball = new Circle(90, height-150, 50);
}

function drawDominos(){
    for (var i =0; i < 20; i++){
        dominos.push(new Domino((55 * i) + 250, height -150, box_width, box_height)); // this Box is an object we have created in box.js
    }

}


function draw(){ // inbuilt to p5
    background(51);
    ball.draw();
    for (var i =0; i < dominos.length; i++){
        dominos[i].draw();
    }
    fill(120);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 100);// ground


}