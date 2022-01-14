
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
let dominos = [];
let ground;
let slide;
let ball;

const box_width = 20;
const box_height = 160;
function setup(){ // inbuilt to p5
    createCanvas(1600, 600);
    engine = Engine.create();
    // engine.timing.timeScale = 2;
    world = engine.world;
    Engine.run(engine); // bit like saying "continually update"


    ground = new Boundary(600, height, width, 100);
    slide = new Boundary(200, height - 200, 300, 30, 60);
    ball = new Circle(90, height-300, 50);
    for (var i =0; i < 20; i++){
        dominos.push(new Domino((75 * i) + 450, height -150, box_width, box_height)); // this Box is an object we have created in box.js
    }

    // Matter.Body.applyForce(ball.body, { x: ball.body.position.x, y: ball.body.position.y },  { x: 0, y: 0 });

}




function draw(){ // inbuilt to p5
    background(51);
    ground.draw();
    slide.draw();
    ball.draw();
    for (var i =0; i < dominos.length; i++){
        dominos[i].draw();
    }
    fill(120);
    rectMode(CENTER);



}