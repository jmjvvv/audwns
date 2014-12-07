
 var bugs = []; // array of Jitter objects
 var img;

 var diameter; 
var angle = 0;





 function setup() {
  createCanvas(710, 400);
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);
  // Create objects
  img = loadImage("p.jpg");
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {

  background(img);
  var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
  var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
  var d3 = 10 + (sin(angle + PI) * diameter/2) + diameter/2;
  
  ellipse(0, height/2, d1, d1);
  ellipse(width/2, height/2, d2, d2);
  ellipse(width, height/2, d3, d3);
  
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