let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine = Engine.create();
engine.gravity.scale = 0.003;

let width = 5000;
let height = 500;
let box_width = 5 * 2;
let box_height = 40 * 2;
let gap = 40;

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width,
        height,
        wireframes: false
    }
});

let ground = Bodies.rectangle(width / 2, height - 100, width, 100, { isStatic: true });
let slide = Bodies.rectangle(190, height - 200, 300, 30, { angle: 60, isStatic: true });

let ball = Bodies.circle(100, 30, 20* 2);
ball.restitution = 0;
ball.frictionAir = 0.001;

World.add(engine.world, [ground, slide, ball]);

for (let i =0; i < 70; i++){
    body = Bodies.rectangle((gap * i) + 350, height -150, box_width, box_height, {
        friction: 0.075,
        restitution: 0.1,
        frictionAir: 0,
        mass: 5,
    });
    World.add(engine.world, body); // physics
}

Engine.run(engine);

Render.run(render);

