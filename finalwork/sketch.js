// 最終課題を制作しよう

var w = 400;
var h = 400;
var loopStatus = true;
function setup() {
  createCanvas(w, h);
  background(100);//white
  frameRate(5);
}

function draw() {
  background(255, 182, 193);
  push();
  stroke(color(139, 69, 19));
  translate(200, 200);
  rotate(frameCount / 10);
  drawGear(20, 50);
  pop();

  push();
  stroke(color(189, 179, 113));
  translate(50, 200);
  rotate(-frameCount / 10 + 120);
  drawGear(20, 90);
  pop();

  push();
  stroke(color(128, 128, 0));
  translate(300, 70);
  rotate(-frameCount / 10);
  drawGear(20, 100);
  pop();

  push();
  stroke(color(95, 158, 160));
  translate(300, 300);
  rotate(-frameCount / 10 + 44);
  drawGear(20, 80);
  pop();
}

function drawGear(n, r){
  var rad = TWO_PI / n;

  for(i = 0; i < TWO_PI; i += 0.01){
    var y1 = 0;
    var y2 = 0;
    if(sin(i * n) >= 0){
      y1 = r;
    }else{
      y1 = r * 1.1;
    }
    line(y1 * cos(i), y1 * sin(i), 0, 0);
  }
  ellipse(0, 0, 10);
}

function mousePressed(){
  if(loopStatus){
    noLoop();
    loopStatus = false;
  }else{
    loop();
    loopStatus = true;
  }
}
