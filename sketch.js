
 var bugs = []; // array of Jitter objects
 var img;

 var diameter; 
var angle = 0;

var paths = [];
// Are we painting?
var painting = false;
// How long until the next circle
var next = 0;
// Where are we now and where were we?
var current;
var previous;




 function setup() {
  createCanvas(710, 400);
current = createVector(0,0);
  previous = createVector(0,0);

  diameter = height - 10;
  noStroke();
  fill(255,255,255,100);
  // Create objects
  img = loadImage("p.jpg");
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {

  background(img);
if (millis() > next && painting) {

    // Grab mouse position      
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    var force = p5.Vector.sub(current, previous);
    force.mult(0.05);

    // Add new particle
    paths[paths.length - 1].add(current, force);
    
    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  // Draw all paths
  for( var i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }


  var d1 = 1 + (sin(angle + PI/20) * diameter/20) + diameter/15;
  var d2 = 1 + (sin(angle + PI/20) * diameter/20) + diameter/20;
var d3 = 1 + (sin(angle + PI/20) * diameter/30) + diameter/13;
var d4 = 1 + (sin(angle + PI/20) * diameter/20) + diameter/9;
var d5 = 1 + (sin(angle + PI/20) * diameter/20) + diameter/20;
var d6 = 1 + (sin(angle + PI/20) * diameter/40) + diameter/10;
var d7 = 1 + (sin(angle + PI/20) * diameter/20) + diameter/20;
var d8 = 1 + (sin(angle + PI/20) * diameter/20) + diameter/16;
  
  rect(0, height/3, d1, d1);
  rect(width/2, height/2, d2, d2);
rect(600, height/2, d3, d3);
rect(300, 100, d4, d4);
rect(500, 50, d5, d5);
rect(150, 350, d6, d6);
rect(150, 50, d7, d7);
rect(600, 390, d7, d7);
  
  angle += 0.02;


  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
   


  }
}



// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(2, 9);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(255);
    noStroke();
    rect(this.x, this.y, this.diameter, this.diameter);
    
  }; 
}

function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

// Stop
function mouseReleased() {
  painting = false;
}

// A Path is a list of particles
function Path() {
  this.particles = [];
  this.hue = random(100);
}

Path.prototype.add = function(position, force) {
  // Add a new particle with a position, force, and hue
  this.particles.push(new Particle(position, force, this.hue));
}

// Display plath
Path.prototype.update = function() {  
  for (var i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
  }
}  

// Display plath
Path.prototype.display = function() {
  
  // Loop through backwards
  for (var i = this.particles.length - 1; i >= 0; i--) {
    // If we shold remove it
    if (this.particles[i].lifespan <= 0) {
      this.particles.splice(i, 1);
    // Otherwise, display it
    } else {
      this.particles[i].display(this.particles[i+1]);
    }
  }

}  

// Particles along the path
function Particle(position, force, hue) {
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(force.x, force.y);
  this.drag = 0.95;
  this.lifespan = 255;
}

Particle.prototype.update = function() {
  // Move it
  this.position.add(this.velocity);
  // Slow it down
  this.velocity.mult(this.drag);
  // Fade it out
  this.lifespan--;
}

// Draw particle and connect it with a line
// Draw a line to another
Particle.prototype.display = function(other) {
  stroke(0, this.lifespan);
  fill(0, this.lifespan/2);    
  ellipse(this.position.x,this.position.y, 8, 8);    
  // If we need to draw a line
  if (other) {
    line(this.position.x, this.position.y, other.position.x, other.position.y);
  }
}