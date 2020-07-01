import ComputerPlayer from "./computer.js";
import HumanPlayer from "./human.js";
import Deck from "./deck.js";
import Team from "./team.js";

export default class Game {
  constructor(canvas) {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.currentDeck.shuffleDeck();
    this.startingPlayerIndex = 0;
    this.startOfRoundMove = this.startingPlayerIndex;
    this.thrownCards = [];
    this.ctx = canvas.getContext("2d");
    this.humanTeam = new Team("humanTeam");
    this.robotTeam = new Team("robotTeam");
    this.canWePlayTheNextTurn = false;
    // setInterval(this.drawBoard.bind(this), 1000)

    this.PLAYERS = [
      new HumanPlayer(this.humanTeam),
      new ComputerPlayer(this.robotTeam, 1),
      new ComputerPlayer(this.humanTeam, 2),
      new ComputerPlayer(this.robotTeam, 3),
    ];

    debugger
    console.log("game init")
  };

  _findCardImage(id) {
    this.thrownCards.forEach(card => {
      if (card.owner.id === id) {
        return card.imageUrl;
      }
    });
    return "../images/no-card.png"
  }

  drawBoard() {
    debugger
    
  console.log(this.thrownCards);

  let firstPlayersThrown = new Image();
  firstPlayersThrown.src = this._findCardImage(0)
  let secondPlayersThrown = new Image();
  secondPlayersThrown.src = this._findCardImage(1)
  let thirdPlayersThrown = new Image();
  thirdPlayersThrown.src = this._findCardImage(2)
  let fourthPlayersThrown = new Image();
  fourthPlayersThrown.src = this._findCardImage(3)

  let faceDown = new Image();
  faceDown.src = "../images/card-back-rename.jpg";

    this.ctx.save();
    // this.ctx.fillRect(0, 405, 160, 90);
    // this.ctx.drawImage(faceDown, 0, 405, 160, 90);
  
    this.ctx.save();
    this.ctx.rotate(-90 * (Math.PI / 180));
    //right cpu and deck


    if (this.PLAYERS[1].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, -195, 1040, 90, 160);
    }
    if (this.PLAYERS[1].currentHand.length > 1) {
      this.ctx.drawImage(faceDown, -295, 1040, 90, 160);
    }
    if (this.PLAYERS[1].currentHand.length > 2) {
      this.ctx.drawImage(faceDown, -395, 1040, 90, 160);
    }
    if (this.PLAYERS[1].currentHand.length > 3) {
      this.ctx.drawImage(faceDown, -495, 1040, 90, 160);
    }
    if (this.PLAYERS[1].currentHand.length > 4) {
      this.ctx.drawImage(faceDown, -595, 1040, 90, 160);
    }


    this.ctx.drawImage(secondPlayersThrown, -395, 820, 90, 160);
  
    //deck
    if (this.currentDeck.cardsInDeck.length > 0) {
    this.ctx.drawImage(faceDown, -395, 520, 90, 160);
    }

    this.ctx.restore();

    this.ctx.save();

    this.ctx.rotate(90 * (Math.PI / 180));
    //left cpu
    if (this.PLAYERS[3].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, 105, -160, 90, 160);
    }
    if (this.PLAYERS[3].currentHand.length > 1) {
      this.ctx.drawImage(faceDown, 205, -160, 90, 160);
    }
    if (this.PLAYERS[3].currentHand.length > 2) {
      this.ctx.drawImage(faceDown, 305, -160, 90, 160);
    }
    if (this.PLAYERS[3].currentHand.length > 3) {
      this.ctx.drawImage(faceDown, 405, -160, 90, 160);
    }
    if (this.PLAYERS[3].currentHand.length > 4) {
      this.ctx.drawImage(faceDown, 505, -160, 90, 160);
    }

    this.ctx.drawImage(fourthPlayersThrown, 305, -380, 90, 160);


    this.ctx.restore();

    this.ctx.save();

    this.ctx.rotate(180 * (Math.PI / 180));
    //partner
    if (this.PLAYERS[2].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, -445, -80, 90, 160);
    }
    if (this.PLAYERS[2].currentHand.length > 1) {
      this.ctx.drawImage(faceDown, -545, -80, 90, 160);
    }
    if (this.PLAYERS[2].currentHand.length > 2) {
      this.ctx.drawImage(faceDown, -645, -80, 90, 160);
    }
    if (this.PLAYERS[2].currentHand.length > 3) {
      this.ctx.drawImage(faceDown, -745, -80, 90, 160);
    }
    if (this.PLAYERS[2].currentHand.length > 4) {
      this.ctx.drawImage(faceDown, -845, -80, 90, 160);
    }
    
    this.ctx.drawImage(secondPlayersThrown, -645, -260, 90, 160);

    this.ctx.restore();

    if (this.PLAYERS[0].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, 355, 620, 90, 160);
    }
    if (this.PLAYERS[0].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, 455, 620, 90, 160);
    }
    if (this.PLAYERS[0].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, 555, 620, 90, 160);
    }
    if (this.PLAYERS[0].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, 655, 620, 90, 160);
    }
    if (this.PLAYERS[0].currentHand.length > 0) {
      this.ctx.drawImage(faceDown, 755, 620, 90, 160);
    }

    this.ctx.drawImage(firstPlayersThrown, 555, 440, 90, 160);
  };



  _dealCards() {
    debugger
    if (this.PLAYERS[0].currentHand.length !== 0) return

    for (let i = 0; i < 5; i++) {

    this.PLAYERS.forEach(player => {
        let cardToDraw = this.currentDeck.cardsInDeck.pop();
        player.currentHand.push(cardToDraw);
        cardToDraw.owner = player;
        

        if (player instanceof HumanPlayer) {
          cardToDraw.faceUp = true;
        }
      }
    )};
  };
  
  callBrisc(suit, player) {
    debugger
    if (this.currentBrisc === null) {
      this.currentBrisc = [suit];
      player.team.roundScore += 40;
    } else if (this.currentBrisc.indexOf(suit) === -1) {
      this.currentBrisc.push(suit);
      player.team.roundScore += 20;
    }
  };
  
  drawCard(player, card) {
    debugger
    player.addCard(card)
  }

  thisRoundIsntOver() {
    debugger
    if (this.PLAYERS[0].currentHand.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  addCardsValue(team, cards) {
    debugger
    let currentRoundTally = 0;
    cards.forEach(card => {
      currentRoundTally += card.points
    });

    team.currentRoundScore += currentRoundTally;
  }

  finalTally() {
    debugger
    this.humanTeam.addTotalScore();
    this.robotTeam.addTotalScore();
  }

  playRound() {
    debugger
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
    debugger
    console.log(this.thrownCards)
    if (this.thrownCards.length !== 4) return;

    let suitToBeat;
    let highestCard;

    if (this.currentBrisc) {
      suitToBeat = this.currentBrisc;
    } else {
      suitToBeat = this.thrownCards[0].suit
    };

    for (let i = 0; i < 4; i++) {
      if (this.thrownCards[i].suit === suitToBeat && 
        highestCard === undefined
        || this.thrownCards[i].rank > highestCard.rank) {
        highestCard = this.thrownCards[i];
      }
    }

    if (new String(highestCard.owner.team.name) == "humanTeam") {
      this.addCardsValue(this.humanTeam, this.thrownCards)
    } else {
      this.addCardsValue(this.robotTeam, this.thrownCards)
    }

    this.startOfRoundMove = this.PLAYERS.indexOf(highestCard.owner);
    this.thrownCards = [];
  }

  checkVariable(user, numberOfCards) {
    if (this.canWePlayTheNextTurn === true && this.thrownCards.length === numberOfCards) {
      this.canWePlayTheNextTurn = false;
      this.playMove(user);
    } else {
      window.setTimeout(this.checkIfMoveShouldBePlayed, 500)
    }
  }

  // checkVariable2() {›
  //   let secondToThrow = this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)];
  //   console.log(this.thrownCards)
  //   console.log(this.canWePlayTheNextTurn)
  //   if (this.canWePlayTheNextTurn === true && this.thrownCards.length === 1) {
  //     this.canWePlayTheNextTurn = false;
  //     this.playMove(secondToThrow);
  //   } else {
  //     window.setTimeout(checkVariable2, 500)
  //   }
  // }

  // checkVariable3() {
  //   let thirdToThrow = this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)];
  //   if (this.canWePlayTheNextTurn === true && this.thrownCards.length === 2) {
  //     this.canWePlayTheNextTurn = false;
  //     this.playMove(thirdToThrow);
  //   } else {
  //     window.setTimeout(checkVariable3, 500)
  //   }
  // }

  // checkVariable4() {
  //   let lastToThrow = this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)];
  //   if (this.canWePlayTheNextTurn === true && this.thrownCards.length === 3) {
  //     this.canWePlayTheNextTurn = false;
  //     this.playMove(lastToThrow);
  //   } else {
  //     window.setTimeout(checkVariable4, 500)
  //   }
  // }

  playMove(user) {
    debugger
    if (this.canWePlayTheNextTurn) {
      let cardToThrow = user.promptMove();
      this.thrownCards.push(cardToThrow);
      this.drawBoard();
      this.canWePlayTheNextTurn === true;
      return;
    } else {
      return;
    }
  }

  playHand() {
    debugger    
    let firstToThrow = this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)];
    let secondToThrow = this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)];
    let thirdToThrow = this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)];
    let lastToThrow = this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)];


    this.canWePlayTheNextTurn = true;
    
    this.checkVariable(firstToThrow, 0);
    // this.drawBoard();
        
    this.checkVariable(secondToThrow, 1);
    // this.drawBoard();
        
    this.checkVariable(thirdToThrow, 2);
    // this.drawBoard();
    
    this.checkVariable(lastToThrow, 3);

    
    // this.playMove(firstToThrow);
    
    // this.drawBoard();

    // this.playMove(secondToThrow);
    
    // this.drawBoard();

    // this.playMove(thirdToThrow);
    
    // this.drawBoard();

    // this.playMove(lastToThrow);
    
    // this.drawBoard();

    this.canWePlayTheNextTurn === false;

    this.winningCardThrown();

    if (this.currentDeck.cardsInDeck.length !== 0) {
    let firstToDraw = this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)];
    let secondToDraw = this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)];
    let thirdToDraw = this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)];
    let lastToDraw = this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)];

    firstToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    secondToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    thirdToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    lastToDraw.addCard(this.currentDeck.cardsInDeck.pop());
    }
  }

  hasAnybodyWon() {
    debugger
    if (
      this.humanTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore > this.humanTeam.totalGameScore
    ) {
      // return this.robotTeam;
      return true;
    } else if (
      this.humanTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore <= this.humanTeam.totalGameScore
      ) {
      // return this.humanTeam;
      return true;
    } else if (this.humanTeam.totalGameScore >= 500) {
      // return this.humanTeam;
      return true;
    } else if (this.robotTeam.totalGameScore >= 500) {
      // return this.robotTeam;
      return true;
    } else {
      return false;
    }
  };

  playGame() {
    debugger
    if (this.PLAYERS[0] === undefined ||
      this.PLAYERS[1] === undefined ||
      this.PLAYERS[2] === undefined ||
      this.PLAYERS[3] === undefined ||
      this.currentDeck.cardsInDeck === undefined ||
      this.ctx === undefined) {
      return;
    } 
    // this._dealCards();
    // this.drawBoard();
    console.log("playgame")
    // this.drawBoard();
      while (this.hasAnybodyWon() === false) {
        this.playRound();
        this.finalTally();
        this.startingPlayerIndex += 1;
        this.startOfRoundMove = (this.startingPlayerIndex + 1) % this.PLAYERS.length;
      } 

  
      console.log("game Over")
      console.log(this.humanTeam.totalGameScore)
      console.log(this.robotTeam.totalGameScore)

      return
  }

}
