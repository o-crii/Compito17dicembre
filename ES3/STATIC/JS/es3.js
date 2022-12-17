let w = 400
let x = 0
let y = 0
let l = 40

function setup() {
  createCanvas(400, 400);
  background(255,255,255);
}

function draw() {
  
  let r = random()
  
  if(r>0.5){
    noStroke()
    fill(0,0,0)
    square(x,y,l)
    fill(255,255,255)
    circle(x+l/2,y+l/2,l/2)
  } else{
    noStroke()
    fill(255,255,255)
    square(x+l, y+l, l)
    fill(0,0,0)
    circle(x+l/2, y+l/2, l/2)
  }
  x=x+l
  
  if(x>w){
    x=0
    y=y+l
  }
}