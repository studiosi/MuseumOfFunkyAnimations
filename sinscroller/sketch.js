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
    circles.push(new SinScrollerCircle(0, windowHeight / 2, 5, 150, 2));
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
            circles[i].draw(color(255, 255, 255, circles[i].x % 255), 40); // Color, radius
        }        
    }
}