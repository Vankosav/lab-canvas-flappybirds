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

const body = document.querySelector("body");



let requestId;
let gameFrames = 0;
let speed = 1.5;
  
   
  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  
 
  
  function startGame() {

    if (!requestId) requestId = requestAnimationFrame(gameEngine)
  }

  function obstacleGenerator() {
    if (gameFrames % 120 === 0) {
      let x = canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      obstacles.push(new Obstacles(10, height, x, 0));
      obstacles.push(new Obstacles(10, canvas.height - height - gap, x, height + gap));
    }
  }
  

  function updateObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].x += -1;
      obstacles[i].update(ctx); // Pass ctx to the draw method
    }
  }
  
  
  

  function gameEngine() {
    gameFrames++
  
    clearCanvas()
  
    background.draw();
    background.Update(speed);
    player.draw();
    player.update();
    player.newPos();
    obstacleGenerator();
    updateObstacles(ctx);
    
    
  
    if (requestId) requestAnimationFrame(gameEngine);

    
  };
