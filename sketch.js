
 var bugs = []; // array of Jitter objects
 var img;

 var diameter; 
var angle = 0;





 function setup() {
  createCanvas(710, 400);
  diameter = height - 10;
  noStroke();
  fill(255);
  // Create objects
  img = loadImage("p.jpg");
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {

  background(img);
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