let circles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(60);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function keyTyped() {
    circles.push(new SinScrollerCircle(0, windowHeight / 2, 3, 250, 2));
    return false;    
}

function draw() {
    background(0);

    push();
    textSize(20);
    fill(255, 0, 0);
    text("Press a key to release a circle that will sine-scroll", 20, 20);
    pop();

    for(var i = 0; i < circles.length; i++) {
        circles[i].update();
        if(circles[i].canBeRemoved(0, windowWidth, 0, windowHeight)) {
            circles.splice(i, 1);
        }
        else {
            let c = circles[i];
            let alpha = map(abs(c.position.y - c.originalY), 0, c.amplitude, 0.35, 1);
            c.draw('rgba(255, 255, 255,' + alpha + ')', 40); // Color, radius
        }        
    }
}