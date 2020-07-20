import Game from './game.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas-game");
  let currentGame = new Game(canvas);

  function dealGame(game, startOfEntireRound){
    game.currentDeck.shuffleDeck();
    game._dealCards();
    setTimeout( () => game.drawInitialBoard(), 250)
    game.startOfEntireRound = startOfEntireRound;
    game.startOfThisHand = startOfEntireRound;
  }

  dealGame(currentGame, 0);
  currentGame.playTurn();

  // modal stuff
  let modalBtn = document.getElementById("rules-button")
  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close-btn")

  modalBtn.onclick = function () {
    modal.style.display = "block"
  };

  closeBtn.onclick = function () {
    modal.style.display = "none"
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none"
    }
  };

});
