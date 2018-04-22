// SinScroller Circle for P5.JS
// Author: David Gil de Gómez Pérez (Studiosi)

class SinScrollerCircle {

    constructor(x, y, speedConstant, amplitude, wavelength) {
        this.position = createVector(x, y);
        this.originalY = y;
        this.speed = speedConstant;
        this.amplitude = amplitude;
        this.wavelength = wavelength;
    }

    update() {
        this.position.x += this.speed;
        var currentAngle = map(this.position.x, 0, windowWidth - 1, -TWO_PI, TWO_PI);
        this.position.y = this.originalY + (this.amplitude * sin(this.wavelength * currentAngle));
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