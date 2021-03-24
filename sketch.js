angleMode(DEGREES);
var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hrAngle = map(hr, 0, 60, 360);
  mnAngle = map(mn, 0, 60, 360);
  scAngle = map(sc, 0, 60, 360);
}

function draw() {
  background(0,0,0);

  // hr.display();
  // mn.display();
  // sc.display();

  push();
  rotate(scAngle);
  stroke(25, 255, 0);
  strokeWeight(7);
  line(400, 100, 400, 450);
  pop();

  push();
  rotate(hrAngle);
  stroke(25, 255, 0);
  strokeWeight(7);
  line(400, 200, 400, 300);
  pop();

  push();
  rotate(mnAngle);
  stroke(25, 255, 0);
  strokeWeight(7);
  line(400, 100, 400, 190);
  pop();

  drawSprites();
}