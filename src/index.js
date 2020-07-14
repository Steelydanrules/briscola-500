import Game from './game.js';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas-game");
  let currentGame = new Game(canvas)
  currentGame.currentDeck.shuffleDeck();
  currentGame._dealCards();
  currentGame.drawInitialBoard(); // 50

  setTimeout( () => currentGame.PLAYERS[0].promptMove())
  // setTimeout(currentGame.playGame, 1000);
})

