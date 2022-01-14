let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine = Engine.create();
engine.gravity.scale = 0.003;

let to_rads = (deg) => (Math.PI / 180) * deg;

let width = 3500;
let height = 3000;
let box_width = 5 * 2;
let box_height = 40 * 2;
let domino_gap = 40;
let level0_height = height - 300;
let level_height = 400;

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width,
        height,
        wireframes: false,
    },
});

// level 0
let level0 = Bodies.rectangle(
    width / 2 - 300,
    height - level0_height,
    width,
    100,
    { isStatic: true }
);
let slide0 = Bodies.rectangle(190, height - level0_height - 100, 300, 30, {
    angle: 60,
    isStatic: true,
});
for (let i = 0; i < 70; i++) {
    body = Bodies.rectangle(
        domino_gap * i + 350,
        height - level0_height - 50,
        box_width,
        box_height,
        {
            friction: 0.075,
            restitution: 0.1,
            frictionAir: 0,
            mass: 5,
        }
    );
    World.add(engine.world, body);
}

// subsequent levels
for (let i = 1; i < 8; i++) {
    let level = Bodies.rectangle(
        width / 2 + (i % 2 ? 1 : -1) * 300,
        height - level0_height + i * level_height,
        width,
        100,
        { isStatic: true }
    );
    let slide = Bodies.rectangle(
        (i % 2 ? width : 400) - 220,
        height - level0_height + i * level_height - 200,
        300,
        30,
        { angle: to_rads((i % 2 ? -1 : 1) * 35), isStatic: true }
    );
    World.add(engine.world, [level, slide]);

    for (let j = 0; j < 70; j++) {
        body = Bodies.rectangle(
            domino_gap * j + 350,
            height - level0_height + i * level_height - 50,
            box_width,
            box_height,
            {
                friction: 0.075,
                restitution: 0.1,
                frictionAir: 0,
                mass: 5,
            }
        );
        World.add(engine.world, body);
    }
}

let ball = Bodies.circle(100, 30, 20 * 2);
ball.restitution = 0;
ball.frictionAir = 0.001;

World.add(engine.world, [level0, slide0, ball]);

Engine.run(engine);

Render.run(render);
