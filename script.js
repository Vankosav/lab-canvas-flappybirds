import Background from "./Classes/background.js";
import Player from "./Classes/player.js";
import Obstacles from "./Classes/obstacles.js";

//start the game 
window.onload = function () {
  
  document.getElementById("start-button").onclick = () => {
    startGame()
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Background(ctx, canvas);
const player = new Player(ctx);
const obstacles = [];
const scoreElement = document.getElementById("score");


const body = document.querySelector("body");



let requestId;
let gameFrames = 0;
let speed = 1;
let score = 0;
let gameOver = false;  
let gameOverScreen = () => {} 
   
  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  
 
  
  function startGame() {

    if (!requestId) requestId = requestAnimationFrame(gameEngine)
  }

  function obstacleGenerator() {
    
    if (gameFrames % 120 === 0) {
      let x = canvas.width;
      let minHeight = 100;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);
      obstacles.push(new Obstacles(10, height, x, 0));
      obstacles.push(new Obstacles(10, canvas.height - height - gap, x ));
    }
  
  }
  
  

  function updateObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].x += -1;
      obstacles[i].update(ctx); // Pass ctx to the draw method
    }
  }
  
  
  

  function gameEngine() {
    if (!gameOver) {
    gameFrames++
  
    clearCanvas()
  
    background.draw();
    background.Update(speed);
    player.draw();
    player.update();
    player.newPos();
    obstacleGenerator();
    updateObstacles();
    checkCollision();
    
    
  
  
    if (requestId) requestAnimationFrame(gameEngine);
    } else {
      cancelAnimationFrame(requestId);
      requestId = undefined;
      gameOverScreen();
    }

    
  };
  

 

  function checkCollision() {
    for (let i = 0; i < obstacles.length; i++) {
      if (player.isColliding(obstacles || player.y < 0 || player.y > canvas.height - player.height )) {
        // Handle collision logic here
        console.log("Collision detected!");
        gameOver = true;
        cancelAnimationFrame(requestId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
      
      ctx.fillStyle = "orange";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgb(96, 96, 228)";
      ctx.font = "80px Arial";
      ctx.fillText("Game Over", 180, 300);
    }, 1000);
      
    } else{
        if (obstacles[i].x + obstacles[i].width < player.x && !obstacles[i].passed) {
          obstacles[i].passed = true;
          score++;
          scoreElement.textContent = `Score: ${score}`;
          document.getElementById("start-button").textContent = "Retry";
          console.log("Score: " + score);
      }
    } 
  }

}