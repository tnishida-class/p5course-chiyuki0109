// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
stroke(77)
  for(let i = 0; i < 8; i++){
   for(let j = 0; j < 8; j++){

    if((i + j ) % 2 == 0){ //条件１
      fill(100, 100, 100);
    }else {//全ての条件がFALSEの時
    noFill();
      noStroke();
  }

   rect(size*i, size*j, size);
     if((i + j) % 2 == 0 && j<3){//条件１の結果にかかわらず条件２がTRUEの時
       fill(255, 0, 0);//赤
     }

    else if((i+j)%2!=0, j<5){//条件１2がFALSE,条件３がTRUE
      noFill();
      noStroke();
    }

    else if ((i+j)%2==0 && j<8){//条件１23がFALSE条件4がTRUEのとき
       fill(0, 0, 0);//黒
     }



     circle(size*(i+1/2), size*(j+1/2), size*4/5);
    }
    }
  }
