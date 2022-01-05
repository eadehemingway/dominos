
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
let boxes = [];
let ground;
let ball;

const box_width = 10;
const box_height = 160;
function setup(){ // inbuilt to p5
    createCanvas(600, 600);
    engine = Engine.create();

    world = engine.world;
    Engine.run(engine); // bit like saying "continually update"
    const options = {
        isStatic: true
    };
    ground = Bodies.rectangle(200, height -50, width, 100, options);
    ball = new Circle(90, height-150, 50);

    Matter.Body.applyForce(ball.body, { x: ball.body.position.x, y: ball.body.position.y },  { x: 2, y: 0 });

    World.add(world, ground); // adding ground to physics world
    for (var i =0; i < 10; i++){
        boxes.push(new Box((55 * i) + 250, height -150, box_width, box_height)); // this Box is an object we have created in box.js

    }
}

// function mousePressed(){ // inbuilt to p5
//     boxes.push(new Box(mouseX, mouseY, box_width, box_height)); // this Box is an object we have created in box.js
// }
// function mouseDragged(){ // inbuilt to p5
//     boxes.push(new Box(mouseX, mouseY, box_width, box_height)); // this Box is an object we have created in box.js
// }


function draw(){ // inbuilt to p5
    background(51);
    ball.show();
    for (var i =0; i < boxes.length; i++){
        boxes[i].show();
    }
    noStroke(255);
    fill(170);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 100);


}