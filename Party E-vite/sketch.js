let r = 0;
let g = 0;
let b = 0;
let p = 0;
let u = 0;
let y = 0;
function setup() {
  let canvas = createCanvas(1200, 900);
    canvas.parent("mysketch");
}

function draw() {
  background(220);
  
  strokeWeight(0);
//rect(0,0,280,340);
//rect(0,340,280,340);
//rect(0,900,280,340);
  
  //roll 1
  fill(r+3, g+252, b+82);
  rect(0,0, 200);
  fill(240, 252, 3);
  rect(0,200, 200);
  fill(252, 61, 3);
  rect(0,400, 200);
  fill(3, 252, 169);
  rect(0,600, 200);
  fill(3, 202, 252)
  rect(0,800, 200);
    
    r = r + 5;
    g = g - 10;
    b = b + 10;
    
  
  //roll 2
  fill(3, 74, 252)
  rect(200,0,200);
  fill(111, 3, 252);
  rect(200,200,200);
  fill(240, 3, 252)
  rect(200,400,200);
  fill(3, 211, 252)
  rect(200,600,200);
  fill(252, 111, 3)
  rect(200,800,200);
  
  //roll 3
  fill(252, 3, 3)
  rect(400,0,200);
  fill(3, 252, 177);
  rect(400,200,200);
  fill(190, 252, 3);
  rect(400,400,200);
  fill(181, 3, 252);
  rect(400,600,200);
  fill(244, 252, 3);
  rect(400,800,200);
  
  //roll 4
  fill(252, 157, 3);
  rect(600,0,200);
  fill(252, 3, 215)
  rect(600,200,200);
  fill(15, 3, 252)
  rect(600,400,200);
  fill(230, 16, 20);
  rect(600,600,200);
  fill(16, 230, 20);
  rect(600,800,200);
  
  //roll 5
  fill(245, 237, 24);
  rect(800,0,200);
  fill(57, 245, 24)
  rect(800,200,200);
  fill(245, 160, 24)
  rect(800,400,200);
  fill(136, 48, 242)
  rect(800,600,200);
  fill(58, 48, 242)
  rect(800,800,200);
  
  //roll 6
  fill(p+242, u-48, y+232)
  rect(1000,0,200);
  fill(242, 48, 48)
  rect(1000,200,200);
  fill(48, 242, 242)
  rect(1000,400,200);
  fill(232, 242, 48)
  rect(1000,600,200);
  fill(242, 48, 213)
  rect(1000,800,200);
  
  
    p = p + 5;
    u = u + 10;
    y = y + 10;
  
  
  

  
  
  
  strokeWeight(1)
  //drawGrid()

}


































function drawGrid() {
  textSize(10);
  stroke(200);
  fill(120);
  for (let x = -width; x < width; x += 40) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (let y = -height; y < height; y += 40) {
    line(-width, y, width, y);
    fill(255, 100, 0);
    text(y, 1, y + 12);
  }
}