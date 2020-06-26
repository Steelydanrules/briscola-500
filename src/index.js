import Game from './game.js';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas-game");
  
  let currentGame = new Game(canvas)
  setTimeout(currentGame.playGame(), 1);
})