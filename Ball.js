class Ball{
    constructor(xPos,yPos){
      this.x = xPos;
      this.y = yPos;
      this.diameter = 20;
      this.velocityX = 0;
      this.velocityY = 0;
    }
    displayBall(){
      circle(this.x,this.y,this.diameter);

      this.x += this.velocityX;
      this.y += this.velocityY;

      if(gameState != "serve"){
        if(this.VelocityX <= 0)
          this.velocityX += -0.005;
        else if(this.velocityX > 0)
          this.velocityX += 0.005;
        if(this.velocityY <= 0)
          this.velocityY += -0.005;
        else if(this.velocityY > 0 )
          this.velocityY += 0.005;
      }
    }
    isTouchingEdge(){
      var test;
      if(this.y >= 200)
        test = "bottomEdge";
      if(this.y < 200)
        test = "topEdge";
      if(test === "topEdge") {
       if(this.y <= (this.diameter/2))
        this.velocityY = this.velocityY * -1;
      }
      else if(test === "bottomEdge"){
      if((400 - this.y) <= (this.diameter/2))
        this.velocityY = this.velocityY * -1;
      }
    }
    isTouchingPaddle(object) {
      var testX = this.x;
      var testY = this.y;
      if (this.x < object.x)
       testX = object.x;      
      else if (this.x > object.x+object.width) 
       testX = object.x+object.width;   
      if (this.y < object.y)
       testY = object.y;     
      else if (this.y > object.y+object.height) 
       testY = object.y+object.height;   
      var distX = this.x-testX;
      var distY = this.y-testY;
      var distance = sqrt( (distX*distX) + (distY*distY) );
      if (distance <= this.diameter/2) 
        this.velocityX *= -1;
    }
  }