var bg;
var y = 0;
var bugs = []; 

function setup() {
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 710x400 pixls.
  bg = loadImage("p.jpg");
  img=loadImage("a.png");
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  createCanvas(720, 400);
}

function draw() {
   var duration1 = 5000;
   var timing1 = (new Date()%duration1)/duration1;
  background(bg);

  image(img,600 + Math.cos(timing1*2*PI)*500,          
        400 + Math.sin(timing1*2*PI)*0);


  stroke(226, 204, 0);
  line(0, y, width, y);
  
  y++;
  if (y > height) {
    y = 0; 
     for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

