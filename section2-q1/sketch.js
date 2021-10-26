// 小手調べ
function setup(){
  for(let i = 0; i < 5; i++){
  noFill();
    stroke(255, 0, 0);
    let x = i * 10 + 10;
    ellipse(50, 50, x);
  }
  for(let i = 5; i < 10; i++){
  noFill();
    stroke(0, 0, 255);
    let x = i * 10 + 10;
    ellipse(50, 50, x);
  }
}
