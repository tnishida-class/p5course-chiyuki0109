function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  fill(94, 185, 84);
  triangle(0,108,106,120,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
