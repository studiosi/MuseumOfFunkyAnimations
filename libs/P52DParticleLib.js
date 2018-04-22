
// 2D Particle Lib for P5.JS
// Author: David Gil de Gómez Pérez (Studiosi)

class Particle2D {

    constructor(positionVector, speedVector, accelerationVector) {
        this.position = positionVector;
        this.speed = speedVector;
        this.acceleration = accelerationVector;
    }

    update() {
        this.position.add(this.speed);
        this.speed.add(this.acceleration);
    }

    draw(color, radius) {
        push(); // So we don't affect the original drawing state
        strokeWeight(0);
        fill(color);
        ellipse(this.position.x, this.position.y, radius, radius);
        pop(); // Return to the original drawing state
    }

    canBeRemoved(minX, maxX, minY, maxY) {
        return this.position.x < minX || this.position.x > maxX 
            || this.position.y < minY || this.position.y > maxY;
    }

}