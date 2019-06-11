let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  let b = new Ball(mouseX, mouseY);
  balls.push(b);

}

function draw(){
  background(0);
  for (var i = 0; i < balls.length; i++){
    balls[i].show();
    balls[i].move();
    balls[i].bounce();
  }
}

class Ball{
  constructor(x,y){
    this.d = random(20,40);
    this.x = x;
    this.y = y;
    this.speedx = 3;
    this.speedy = 3;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  show(){
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.d);
  }
  move(){
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }
  bounce(){
    if (this.x > width-(this.d/2) || this.x < (this.d/2)){
      this.speedx = this.speedx * -1
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
    if (this.y > height-(this.d/2) || this.y < (this.d/2)){
      this.speedy = this.speedy * -1
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
