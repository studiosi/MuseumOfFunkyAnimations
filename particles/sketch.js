var particles = [];
var fps = 0.0;
const nParticles = 500;
const speedC = 1;

function addNewParticle() {
    let position = createVector(windowWidth / 2, windowHeight / 2);
    let speed = createVector(random(-speedC, speedC), random(-speedC, speedC));
    particles.push(new Particle2D(position, speed, createVector(0, 0)));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(60);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    particles = [];
}

function draw() {
    background(0);    

    if(frameCount % 60 === 0) {
        fps = round(frameRate());
    }

    push();
    textSize(20);
    fill(255, 0, 0);
    text("FPS: " + fps, 20, 20);
    text("Particle count: " + particles.length, 20, 40);
    pop();

    if(particles.length < nParticles) {
        addNewParticle();
    }

    for(var i = 0; i < particles.length; i++) {
        particles[i].update();
        if(particles[i].canBeRemoved(0, windowWidth, 0, windowHeight)) {
            particles.splice(i, 1);
        }
        else {
            particles[i].draw(255, 3); // Color, radius
        }        
    }
}