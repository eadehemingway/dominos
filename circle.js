

function Circle(x, y, r){
    this.body = Bodies.circle(x, y, r, {
        friction: 0.02,
        restitution: 0,
        // density: 0.1
    }); // creates rect in physics world matter.js
    this.r = r;

    World.add(world, this.body); // add physics to physics world

    this.isOffScreen = function () {
        const pos = this.body.position;
        return pos.y > height + 100;

    };

    this.removeFromWorld = function () {
        World.remove(world, this.body);

    };
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
        ellipse(0,0, this.r * 2); // creates ellipse in p5 it expects diameter not radius
        pop(); // p5 restore original state
    };
}