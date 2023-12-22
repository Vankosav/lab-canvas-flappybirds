import Background from "./Classes/background.js";
import Player from "./Classes/player.js";


//start the game 
window.onload = function () {
  // document.querySelector("#game-board").style.display = "none"
  document.getElementById("start-button").onclick = () => {
    startGame()
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Background(ctx, canvas);
const player = new Player(ctx);

const body = document.querySelector("body");



let requestId;
let gameFrames = 0;
let speed = 1.5;
  
   
  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  
 
  
  function startGame() {
    // document.querySelector("#game-intro").style.display = "none"
    // document.querySelector("#game-board").style.display = ""
    if (!requestId) requestId = requestAnimationFrame(gameEngine)
  }


  function gameEngine() {
    gameFrames++
  
    clearCanvas()
  
    background.draw();
    background.Update(speed);
    player.draw();
    player.update();
    
  
    if (requestId) requestAnimationFrame(gameEngine)
  }