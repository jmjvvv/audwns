
 var bugs = []; // array of Jitter objects
 var img;
 var img2;
 var dir1=100;



 function setup() {
  createCanvas(710, 400);
  // Create objects
  img = loadImage("p.jpg");
  img2 = loadImage("a.png");

  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {

  background(img);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
    drawSaram();


  }
}
function drawSaram(){
  image(img2,dir1,200);

  dir1=dir1+1;     
  if(dir1>720){
   dir1=-720;
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