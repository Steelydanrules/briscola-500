import Game from './game.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas-game");
  let currentGame = new Game(canvas);

  function dealGame(game, startOfEntireRound){
    game.currentDeck.shuffleDeck();
    game._dealCards();
    setTimeout( () => game.drawInitialBoard(), 250) // 50
    game.startOfEntireRound = startOfEntireRound;
    game.startOfThisHand = startOfEntireRound;
  }

  function playTurn(){
    let firstToThrow = currentGame.PLAYERS[((currentGame.startOfThisHand + 0) % currentGame.PLAYERS.length)];
    let secondToThrow = currentGame.PLAYERS[((currentGame.startOfThisHand + 1) % currentGame.PLAYERS.length)];
    let thirdToThrow = currentGame.PLAYERS[((currentGame.startOfThisHand + 2) % currentGame.PLAYERS.length)];
    let lastToThrow = currentGame.PLAYERS[((currentGame.startOfThisHand + 3) % currentGame.PLAYERS.length)];
    
    setTimeout(firstToThrow.promptMove(), 1000);
    throwSecond();
    throwThird();
    throwLast();

    function throwSecond() {
      if (currentGame.thrownCards.length === 1) {
        setTimeout(secondToThrow.promptMove(), 1000);
      } else {
        console.log(currentGame.thrownCards)
        setTimeout( () => throwSecond(), 1000);
      }
    };

    function throwThird() {
      if (currentGame.thrownCards.length === 2) {
        setTimeout(thirdToThrow.promptMove(), 1000);
      } else {
        console.log(currentGame.thrownCards)
        setTimeout(() => throwThird(), 2000);
      }
    };

    function throwLast() {
      if (currentGame.thrownCards.length === 3) {
        setTimeout(lastToThrow.promptMove(), 1000);
      } else {
        setTimeout(() => throwLast(), 3000);
      }
    };

    

  };

  dealGame(currentGame, 0);
  playTurn();
  currentGame.winningCardThrown();





















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
