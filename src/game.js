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
    this.c = canvas.getContext("2d");
    this.humanTeam = new Team("humanTeam");
    this.robotTeam = new Team("robotTeam");
    
    // let human = new HumanPlayer(this.humanTeam);
    // let computer1 = new ComputerPlayer(this.robotTeam);
    // let computer2 = new ComputerPlayer(this.humanTeam);
    // let computer3 = new ComputerPlayer(this.robotTeam);

    this.PLAYERS = [
      new HumanPlayer(this.humanTeam),
      new ComputerPlayer(this.robotTeam, 1),
      new ComputerPlayer(this.humanTeam, 2),
      new ComputerPlayer(this.robotTeam, 3),
    ];
  };



  drawBoard() {
  let faceDown = new Image();
  faceDown.src = "../images/card-back-rename.jpg";
  faceDown.onload = function () {

    c.save();
    c.rotate(-90 * (Math.PI / 180));
    //right cpu and deck
    debugger
    if ((this.PLAYERS[1]).currentHand.length > 0) c.drawImage(faceDown, -195, 1040, 90, 160);
    if ((this.PLAYERS[1]).currentHand.length > 1) c.drawImage(faceDown, -295, 1040, 90, 160);
    if ((this.PLAYERS[1]).currentHand.length > 2) c.drawImage(faceDown, -395, 1040, 90, 160);
    if ((this.PLAYERS[1]).currentHand.length > 3) c.drawImage(faceDown, -495, 1040, 90, 160);
    if ((this.PLAYERS[1]).currentHand.length > 4) c.drawImage(faceDown, -595, 1040, 90, 160);

    c.drawImage(faceDown, -395, 820, 90, 160);
  
    //deck
    if (this.currentDeck.cardsInDeck.length > 0) c.drawImage(faceDown, -395, 520, 90, 160);

    c.restore();

    c.save();

    c.rotate(90 * (Math.PI / 180));
    //left cpu
      c.drawImage(faceDown, 105, -160, 90, 160);
      c.drawImage(faceDown, 205, -160, 90, 160);
      c.drawImage(faceDown, 305, -160, 90, 160);
      c.drawImage(faceDown, 405, -160, 90, 160);
      c.drawImage(faceDown, 505, -160, 90, 160);

      c.drawImage(faceDown, 305, -380, 90, 160);
    c.restore();

    c.save();

    c.rotate(180 * (Math.PI / 180));
    //partner
      c.drawImage(faceDown, -445, -80, 90, 160);
      c.drawImage(faceDown, -545, -80, 90, 160);
      c.drawImage(faceDown, -645, -80, 90, 160);
      c.drawImage(faceDown, -745, -80, 90, 160);
      c.drawImage(faceDown, -845, -80, 90, 160);

      c.drawImage(faceDown, -645, -260, 90, 160);
    c.restore();

    c.drawImage(faceDown, 355, 620, 90, 160);
    c.drawImage(faceDown, 455, 620, 90, 160);
    c.drawImage(faceDown, 555, 620, 90, 160);
    c.drawImage(faceDown, 655, 620, 90, 160);
    c.drawImage(faceDown, 755, 620, 90, 160);

    c.drawImage(faceDown, 555, 440, 90, 160);

  };
}


  _dealCards() {
    this.drawBoard();

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

  thisRoundOver() {
    if (this.PLAYERS[0].currentHand.length === 0) {
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
    this.drawBoard();


    while (!this.thisRoundOver()) {    
    this.playHand();
    // console.log(this.currentDeck.cardsInDeck.length, "playround");
    }

    // console.log("thisroundended")
  }

  winningCardThrown() {
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

  playHand() {
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)].promptMove());
    this.drawBoard();
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)].promptMove());
    this.drawBoard();
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)].promptMove());
    this.drawBoard();
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)].promptMove());
    this.drawBoard();
    this.winningCardThrown();

    console.log(this.thrownCards)
    if (this.currentDeck.cardsInDeck.length !== 0) {
    this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    }
  }

  hasAnybodyWon() {
    // console.log(this.humanTeam.totalGameScore, "total human score");
    // console.log(this.robotTeam.totalGameScore, "total robot score");

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
    while (!this.hasAnybodyWon()) {
      this.playRound();
      this.finalTally();
      this.startingPlayerIndex += 1;
      this.startOfRoundMove = (this.startingPlayerIndex + 1) % this.PLAYERS.length;
    } 

    console.log("game Over")


    return this.hasAnybodyWon();
  }

}
