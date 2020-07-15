import Game from './game.js';




document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas-game");
  let currentGame = new Game(canvas)
  currentGame.currentDeck.shuffleDeck();
  currentGame._dealCards();
  setTimeout( () => currentGame.drawInitialBoard(), 250) // 50
  let startOfGamePlayer = 0;
  let startOfRoundPlayer = startOfGamePlayer
  
  let firstToThrow = currentGame.PLAYERS[((currentGame.startOfRoundMove + 0) % currentGame.PLAYERS.length)];
  let secondToThrow = currentGame.PLAYERS[((currentGame.startOfRoundMove + 1) % currentGame.PLAYERS.length)];
  let thirdToThrow = currentGame.PLAYERS[((currentGame.startOfRoundMove + 2) % currentGame.PLAYERS.length)];
  let lastToThrow = currentGame.PLAYERS[((currentGame.startOfRoundMove + 3) % currentGame.PLAYERS.length)];
  

  setTimeout(firstToThrow.promptMove(), 1000);
  throwSecond(currentGame)
  throwThird(currentGame)
  throwLast(currentGame)

  function throwSecond() {
    if (currentGame.thrownCards.length === 1) {
      setTimeout(secondToThrow.promptMove(), 1000);
    } else {
      console.log("2")
      console.log(currentGame.thrownCards)
      setTimeout( () => throwSecond(), 1000);
    }
  };

  function throwThird() {
    if (currentGame.thrownCards.length === 2) {
      setTimeout(thirdToThrow.promptMove(), 1000);
    } else {
      console.log("3")
      console.log(currentGame.thrownCards)
      setTimeout(() => throwThird(), 2000);
    }
  };

  function throwLast() {
    if (currentGame.thrownCards.length === 3) {
      setTimeout(lastToThrow.promptMove(), 1000);
    } else {
      console.log("last")
      setTimeout(() => throwLast(), 3000);
    }
  };

  // modal stuff
  let modalBtn = document.getElementById("rules-button")
  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close-btn")

  modalBtn.onclick = function () {
    modal.style.display = "block"
  };

  closeBtn.onclick = function () {
    modal.style.display = "none" //change to none
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none" //change to none
    }
  }

});
