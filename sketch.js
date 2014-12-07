
 var bugs = []; // array of Jitter objects
 var img;
 var img2;



function setup() {
  createCanvas(710, 400);
  // Create objects
 img = loadImage("p.jpg");
 img2=loadImage("a.png");

  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(img);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();

    var duration1 = 5000;
    var timing1 = (new Date()%duration1)/duration1;
    image(img2,600 + Math.cos(timing1*2*PI)*500,          
        400 + Math.sin(timing1*2*PI)*0);
  }
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(5, 10);
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