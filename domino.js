

function Domino(x, y, w, h){

    this.body = Bodies.rectangle(x, y, w, h, {
        friction: 0.1,
        restitution: 0.1,
        frictionAir:0

    }); // creates rect in physics world matter.js
    this.w = w;
    this.h = h;

    World.add(world, this.body); // physics
    this.draw = function (){
        const pos = this.body.position;
        const angle = this.body.angle;

        push(); // p5 starts a new drawing state
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER); // tells p5 that the ref point of rect is center
        stroke(255);
        strokeWeight(1);
        fill(127);
        rect(0,0, w, h); // creates rect in p5, reference point is default top left
        pop(); // p5 restore original state
    };
}