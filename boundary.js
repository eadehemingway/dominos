

function Boundary(x, y, w, h, a){

    this.body = Bodies.rectangle(x, y, w, h, {
        friction: 1,
        restitution: 0.6,
        isStatic: true ,// ie. it doesnt move,
        angle: a || 0,
    }); // creates rect in physics world matter.js
    this.w = w;
    this.h = h;

    World.add(world, this.body);
    console.log("world:", world);
    console.log("World:", World);

    this.draw = function (){
        const pos = this.body.position;
        const angle = this.body.angle;

        push(); // p5 starts a new drawing state
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER); // tells p5 that the ref point of rect is center
        noStroke();
        strokeWeight(1);
        fill(155);
        rect(0,0, w, h); // creates rect in p5, reference point is default top left
        pop(); // p5 restore original state
    };
}