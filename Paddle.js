class Paddle{constructor(xPos,yPos){this.x = xPos;this.y = yPos;this.height = 100;this.width = 10;}
displayPaddle(){rect(this.x,this.y,this.width,this.height);var r = map(this.x,0,400,0,255);var g = map(this.y,0,400,0,255);fill(r,g,150);}}
  