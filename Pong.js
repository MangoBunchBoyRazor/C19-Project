var ball = new Ball(200,200);var computerPaddle = new Paddle(10,200);var playerPaddle = new Paddle(380,200);
var gameState = "serve";var playerScore = 0;var computerScore = 0;
function setup() {createCanvas(400, 400);}function draw() {background(210);
  ball.displayBall();ball.isTouchingEdge();ball.isTouchingPaddle(playerPaddle);ball.isTouchingPaddle(computerPaddle);
  computerPaddle.displayPaddle();computerPaddle.y = ball.y - computerPaddle.height/2;   
  playerPaddle.y = mouseY;playerPaddle.displayPaddle();textSize(20);text(playerScore,300,100);text(computerScore,100,100);
  if(gameState === "serve")textAlign(CENTER);text("Press a to serve",200,150);
  if(gameState === "end"){if(ball.x > 400){computerScore++;}ball.x = 200;ball.y = 200;text("You lose a point",200,200);text("Press r to restart",200,225);}
  if(ball.x < 0 || ball.x > 400){gameState = "end";}}
function keyPressed(){if(key === 'a'){ball.velocityX = random(-3,3);ball.velocityY = random(-3,3);gameState = "play";}
if(key === 'r' && gameState === "pause"){gameState = "play";frameRate(60);}if(key === 'r' && gameState === "end"){gameState = "serve";ball.velocityX = 0;ball.velocityY = 0;}}