import ComputerPlayer from "./computer.js";
import HumanPlayer from "./human.js";
import Deck from "./deck.js";
import Team from "./team.js";

export default class Game {
  constructor(canvas) {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.startOfEntireRound = 0;
    this.startOfThisHand = 0;
    this.thrownCards = [];
    this.lastHand = [];
    this.lastStarter = null;
    this.ctx = canvas.getContext("2d");
    this.humanTeam = new Team("humanTeam");
    this.robotTeam = new Team("robotTeam");

    this.PLAYERS = [
      new HumanPlayer(this.humanTeam, canvas, this),
      new ComputerPlayer(this.robotTeam, 1, canvas, this),
      new ComputerPlayer(this.humanTeam, 2, canvas, this),
      new ComputerPlayer(this.robotTeam, 3, canvas, this),
    ];

    console.log("game init")

    this.drawInitialBoard = this.drawInitialBoard.bind(this);
    this._dealCards = this._dealCards.bind(this);
    this.callBrisc = this.callBrisc.bind(this);
    this.drawCard = this.drawCard.bind(this);
    this.thisRoundIsntOver = this.thisRoundIsntOver.bind(this);
    this.addCardsValue = this.addCardsValue.bind(this);
    this.finalTally = this.finalTally.bind(this);
    this.playRound = this.playRound.bind(this);
    this.winningCardThrown = this.winningCardThrown.bind(this);
    this.playMove = this.playMove.bind(this);
    this.playHand = this.playHand.bind(this);
    this.hasAnybodyWon = this.hasAnybodyWon.bind(this);
    this.playGame = this.playGame.bind(this);
    this.eachPlayerDraws = this.eachPlayerDraws.bind(this);
    // this.throwSecond = this.throwSecond.bind(this);
    // this.throwThird = this.throwThird.bind(this);
    // this.throwLast = this.throwLast.bind(this);
    this.nextThrow = this.nextThrow.bind(this);
  };

  drawInitialBoard() {
  let faceDown = new Image();
  let noCard = new Image();
  faceDown.src = "../images/card-back-rename.JPG";
  noCard.src = "../images/no-card.png";
  let humanPlayerHand = this.PLAYERS[0].currentHand;
  let firstCard = new Image();
  let secondCard = new Image();
  let thirdCard = new Image();
  let fourthCard = new Image();
  let fifthCard = new Image();
  let cpuFirstCard = new Image();
  let cpuSecondCard = new Image();
  let cpuThirdCard = new Image();
  let cpuFourthCard = new Image();
  let couFifthCard = new Image();

  if (humanPlayerHand.length > 0) {
    firstCard.src = humanPlayerHand[0].imageUrl;
    cpuFirstCard.src = "../images/card-back-rename.JPG"
  } else {
    firstCard.src = "../images/no-card.png";
    cpuFirstCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 1) {
    secondCard.src = humanPlayerHand[1].imageUrl;
    cpuSecondCard.src = "../images/card-back-rename.JPG"
  } else {
    secondCard.src = "../images/no-card.png";
    cpuSecondCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 2) {
    thirdCard.src = humanPlayerHand[2].imageUrl;
    cpuThirdCard.src = "../images/card-back-rename.JPG"
  } else {
    thirdCard.src = "../images/no-card.png";
    cpuThirdCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 3) {
    fourthCard.src = humanPlayerHand[3].imageUrl;
    cpuFourthCard.src = "../images/card-back-rename.JPG"
  } else {
    fourthCard.src = "../images/no-card.png";
    cpuFourthCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 4) {
    fifthCard.src = humanPlayerHand[4].imageUrl;
    couFifthCard.src = "../images/card-back-rename.JPG"
  } else {
    fifthCard.src = "../images/no-card.png";
    couFifthCard.src = "../images/no-card.png"
  }

    setTimeout(() => {
      console.log("drawint")
      this.ctx.save();
      this.ctx.rotate(-90 * (Math.PI / 180));

      // right comp
      this.ctx.drawImage(cpuFirstCard, -195, 1040, 90, 160);    
      this.ctx.drawImage(cpuSecondCard, -295, 1040, 90, 160);
      this.ctx.drawImage(cpuThirdCard, -395, 1040, 90, 160);
      this.ctx.drawImage(cpuFourthCard, -495, 1040, 90, 160);
      this.ctx.drawImage(couFifthCard, -595, 1040, 90, 160);
      this.ctx.drawImage(noCard, -395, 820, 90, 160);

      // deck
      if (this.currentDeck.cardsInDeck.length !== 0) {
        this.ctx.drawImage(faceDown, -395, 520, 90, 160);
      } else {
        this.ctx.drawImage(noCard, -395, 520, 90, 160);
      }

      this.ctx.restore();
      this.ctx.save();
      this.ctx.rotate(90 * (Math.PI / 180));

      //left cpu
      this.ctx.drawImage(cpuFirstCard, 105, -160, 90, 160);
      this.ctx.drawImage(cpuSecondCard, 205, -160, 90, 160);
      this.ctx.drawImage(cpuThirdCard, 305, -160, 90, 160);
      this.ctx.drawImage(cpuFourthCard, 405, -160, 90, 160);
      this.ctx.drawImage(couFifthCard, 505, -160, 90, 160);
      this.ctx.drawImage(noCard, 305, -380, 90, 160);
    
      this.ctx.restore();
      this.ctx.save();
      this.ctx.rotate(180 * (Math.PI / 180));

      //partner
      this.ctx.drawImage(cpuFirstCard, -445, -80, 90, 160);
      this.ctx.drawImage(cpuSecondCard, -545, -80, 90, 160);
      this.ctx.drawImage(cpuThirdCard, -645, -80, 90, 160);
      this.ctx.drawImage(cpuFourthCard, -745, -80, 90, 160);
      this.ctx.drawImage(couFifthCard, -845, -80, 90, 160);
      this.ctx.drawImage(noCard, -645, -260, 90, 160);
  
      this.ctx.restore();

      this.ctx.drawImage(firstCard, 355, 620, 90, 160);
      this.ctx.drawImage(secondCard, 455, 620, 90, 160);
      this.ctx.drawImage(thirdCard, 555, 620, 90, 160);
      this.ctx.drawImage(fourthCard, 655, 620, 90, 160);
      this.ctx.drawImage(fifthCard, 755, 620, 90, 160);
      this.ctx.drawImage(noCard, 555, 440, 90, 160);
    }, 350);
  };

  _dealCards() {
    if (this.PLAYERS[0].currentHand.length !== 0) return

    for (let i = 0; i < 5; i++) {

    this.PLAYERS.forEach(player => {
        let cardToDraw = this.currentDeck.cardsInDeck.pop();
        player.currentHand.push(cardToDraw);
        cardToDraw.owner = player;
      }
    )};
  };
  
  callBrisc(suit, player) {
    if (this.currentBrisc === null) {
      this.currentBrisc = [suit];
      player.team.roundScore += 40;
    } else if (this.currentBrisc.indexOf(suit) === -1) {
      this.currentBrisc.push(suit);
      player.team.roundScore += 20;
    }
  };
  
  drawCard(player, card) {
    player.addCard(card)
  }

  thisRoundIsntOver() {
    if (this.PLAYERS[0].currentHand.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  addCardsValue(team, cards) {
    let currentRoundTally = 0;
    cards.forEach(card => {
      currentRoundTally += card.points
    });

    team.currentRoundScore += currentRoundTally;
  }

  finalTally() {
    this.humanTeam.addTotalScore();
    this.robotTeam.addTotalScore();
  }

  playRound() {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.currentDeck.shuffleDeck();
    this._dealCards();
    // this.drawBoard();


    while (this.thisRoundIsntOver()) {    
    this.playHand();
    }
  }

  winningCardThrown() {
    if (this === undefined) return;
    if (this.thrownCards.length !== 4) {
      console.log("NOT YET!!!")
      return
    }

    console.log(this.thrownCards, "these are thrown cards");

    debugger

    let highestCard = this.thrownCards[0];
    let suitToBeat = this.thrownCards[0].suit;


      for (let i = 1; i < 4; i++) {
        let thisThrown = this.thrownCards[i];
        if (thisThrown.rank > highestCard.rank
        && thisThrown.suit === suitToBeat) {
          highestCard = thisThrown;
        }
      }

      if (this.currentBrisc) {
        suitToBeat = this.currentBrisc;
        for (let i = 0; i < 4; i++) {
          let thisThrown = this.thrownCards[i];

          if(thisThrown.suit === suitToBeat 
          && highestCard.suit !== suitToBeat) {
            highestCard = thisThrown;
          } else if(thisThrown.rank > highestCard.rank
          && thisThrown.suit === suitToBeat
          && highestCard.suit === suitToBeat) {
            highestCard = thisThrown;
          }
        }
      }

    // add to winning team
    if (new String(highestCard.owner.team.name) == "humanTeam") {
      this.addCardsValue(this.humanTeam, this.thrownCards)
    } else {
      this.addCardsValue(this.robotTeam, this.thrownCards)
    }



    this.lastHand = this.thrownCards;
    this.lastStarter = this.startOfThisHand;

    this.startOfThisHand = this.PLAYERS.indexOf(highestCard.owner);
    this.thrownCards = [];



    if (this.currentDeck.cardsInDeck.length !== 0) {
      console.log(this.currentDeck.cardsInDeck.length, "cards left")
      this.eachPlayerDraws(this.startOfThisHand);
    }
    if (this.PLAYERS[0].currentHand.length !== 0) {
      this.playTurn();
    }

    this.drawInitialBoard();

    console.log(this.humanTeam.currentRoundScore, "human score");
    console.log(this.robotTeam.currentRoundScore, "robot score");
    console.log(highestCard, "is the highest card thrown!!!");
  }


  // throwSecond(player) {
  //   if (this.thrownCards === undefined 
  //     || this.thrownCards.length !== 1
  //     || player === undefined) {
  //       debugger
  //       console.log("second hit")
  //     setTimeout(() => this.throwSecond(), 3000);
  //   } else {
  //     console.log(this.thrownCards)
  //     setTimeout(player.promptMove(), 1000);
  //   }
  // };

  // throwThird(player) {
  //   if (this.thrownCards === undefined 
  //     || this.thrownCards.length !== 2
  //     || player === undefined) {
  //     setTimeout(() => this.throwThird(), 3000);
  //   } else {
  //     console.log(this.thrownCards)
  //     setTimeout(player.promptMove(), 1000);
  //   }
  // };

  // throwLast(player) {
  //   if (this.thrownCards === undefined 
  //     || this.thrownCards.length !== 3
  //     || player === undefined) {
  //     setTimeout(() => this.throwLast(), 3000);
  //   } else {
  //     console.log(this.thrownCards)
  //     setTimeout(player.promptMove(), 1000);
  //   }
  // };

  nextThrow() {
    let secondToThrow = this.PLAYERS[((this.startOfThisHand + 1) % this.PLAYERS.length)];
    let thirdToThrow = this.PLAYERS[((this.startOfThisHand + 2) % this.PLAYERS.length)];
    let lastToThrow = this.PLAYERS[((this.startOfThisHand + 3) % this.PLAYERS.length)];

    if (this.thrownCards.length === 1) {
      setTimeout( () => secondToThrow.promptMove(), 500)
    }

    if (this.thrownCards.length === 2) {
      setTimeout( () => thirdToThrow.promptMove(), 500)
    }

    if (this.thrownCards.length === 3) {
      setTimeout( () => lastToThrow.promptMove(), 500)
    }
    // this.throwSecond(secondToThrow);
    // this.throwThird(thirdToThrow);
    // this.throwLast(lastToThrow);
    
  }

  playTurn() {
  let firstToThrow = this.PLAYERS[((this.startOfThisHand + 0) % this.PLAYERS.length)];
  // let secondToThrow = this.PLAYERS[((this.startOfThisHand + 1) % this.PLAYERS.length)];
  // let thirdToThrow = this.PLAYERS[((this.startOfThisHand + 2) % this.PLAYERS.length)];
  // let lastToThrow = this.PLAYERS[((this.startOfThisHand + 3) % this.PLAYERS.length)];

  firstToThrow.promptMove(this);

  // this.throwSecond(secondToThrow);
  // this.throwThird(thirdToThrow);
  // this.throwLast(lastToThrow);

  // this.winningCardThrown();

};

  eachPlayerDraws(firstIdx) {
    let firstToDraw = this.PLAYERS[((firstIdx + 0) % 4)];
    let secondToDraw = this.PLAYERS[((firstIdx + 1) % 4)];
    let thirdToDraw = this.PLAYERS[((firstIdx + 2) % 4)];
    let lastToDraw = this.PLAYERS[((firstIdx + 3) % 4)];

    firstToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    secondToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    thirdToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    lastToDraw.addCard(this.currentDeck.cardsInDeck.pop());
  }

  playMove(user) {
    let cardToThrow = user.promptMove();
    this.thrownCards.push(cardToThrow);
    this.renderThisUsersThrow(user);
  }

  playHand() {    
    // let firstToThrow = this.PLAYERS[((this.startOfThisHand + 0) % this.PLAYERS.length)];
    // let secondToThrow = this.PLAYERS[((this.startOfThisHand + 1) % this.PLAYERS.length)];
    // let thirdToThrow = this.PLAYERS[((this.startOfThisHand + 2) % this.PLAYERS.length)];
    // let lastToThrow = this.PLAYERS[((this.startOfThisHand + 3) % this.PLAYERS.length)];
    
    // firstToThrow.promptMove();
    // secondToThrow.promptMove();
    // thirdToThrow.promptMove();
    // lastToThrow.promptMove();


    // if (this.cardsThrown[0] === undefined ||
    //   this.cardsThrown[1] === undefined ||
    //   this.cardsThrown[2] === undefined ||
    //   this.cardsThrown[3] === undefined
    //   ) {
    //   this.winningCardThrown();
    // } else {
    //   setTimeout(this.winningCardThrown, 500);
    // }


    if (this.currentDeck.cardsInDeck.length !== 0) {
    let firstToDraw = this.PLAYERS[((this.startOfThisHand + 0) % this.PLAYERS.length)];
    let secondToDraw = this.PLAYERS[((this.startOfThisHand + 1) % this.PLAYERS.length)];
    let thirdToDraw = this.PLAYERS[((this.startOfThisHand + 2) % this.PLAYERS.length)];
    let lastToDraw = this.PLAYERS[((this.startOfThisHand + 3) % this.PLAYERS.length)];

    firstToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    secondToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    thirdToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    lastToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    }
  }

  hasAnybodyWon(game) {
    if (
      game.humanTeam.totalGameScore >= 500 &&
      game.robotTeam.totalGameScore >= 500 &&
      game.robotTeam.totalGameScore > game.humanTeam.totalGameScore
    ) {
      return true;
    } else if (
      game.humanTeam.totalGameScore >= 500 &&
      game.robotTeam.totalGameScore >= 500 &&
      game.robotTeam.totalGameScore <= game.humanTeam.totalGameScore
      ) {
      return true;
    } else if (game.humanTeam.totalGameScore >= 500) {
      return true;
    } else if (game.robotTeam.totalGameScore >= 500) {
      return true;
    } else {
      return false;
    }
  };
  

  playGame() {

    console.log("playgame")
    while (!this.hasAnybodyWon()) {
        this.playRound();
        this.finalTally();
        this.startOfEntireRound += 1;
        this.startOfThisHand = (this.startOfEntireRound + 1) % this.PLAYERS.length;
      } 

  
      console.log("game Over")
      console.log(this.humanTeam.totalGameScore)
      console.log(this.robotTeam.totalGameScore)

      return
  }

}
