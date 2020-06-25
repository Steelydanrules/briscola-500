let ComputerPlayer = require("./computer.js");
let HumanPlayer = require("./human.js");
let Deck = require("./deck.js");
let Team = require("./team.js");

class Game {
  constructor() {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.currentDeck.shuffleDeck();
    this.startingPlayerIndex = 0;
    this.startOfRoundMove = this.startingPlayerIndex;
    this.thrownCards = [];

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

  _dealCards = () => {

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
  
  callBrisc = (suit, player) => {
    if (this.currentBrisc === null) {
      this.currentBrisc = [suit];
      player.team.roundScore += 40;
    } else if (this.currentBrisc.indexOf(suit) === -1) {
      this.currentBrisc.push(suit);
      player.team.roundScore += 20;
    }
  };
  
  drawCard = (player, card) => {
    player.addCard(card)
  }
  
  // thisRoundIsNotOver = () => {
  //   if (this.PLAYERS[(this.startingPlayerIndex + 3) % 4].currentHand.length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   //   this.PLAYERS.forEach((player) => {
  //   //     if (player.currentHand.length == 0) {
  //   //       console.log(player.currentHand.length);
  //   //       return false;
  //   //     }
  //   //   });

  //   // return true;

  // };


  thisRoundOver = () => {
    if (this.PLAYERS[0].currentHand.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  addCardsValue = (team, cards) => {
    let currentRoundTally = 0;
    cards.forEach(card => {
      currentRoundTally += card.points
    });

    team.currentRoundScore += currentRoundTally;
  }



  finalTally = () => {
    this.humanTeam.addTotalScore();
    this.robotTeam.addTotalScore();
  }

  playRound = () => {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.currentDeck.shuffleDeck();
    this._dealCards();


    while (!this.thisRoundOver()) {    
    this.playHand();
    console.log(this.currentDeck.cardsInDeck.length, "playround");
    }

    console.log("thisroundended")
  }

  winningCardThrown = () => {
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

  playHand = () => {
    console.log(this.PLAYERS[3].currentHand);
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)].promptMove());
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)].promptMove());
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)].promptMove());
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)].promptMove());
    this.winningCardThrown();

    console.log(this.thrownCards)
    if (this.currentDeck.cardsInDeck.length !== 0) {
    this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    }
  }

  hasAnybodyWon = () => {
    console.log(this.humanTeam.totalGameScore, "total human score");
    console.log(this.robotTeam.totalGameScore, "total robot score");

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

  playGame = () => {
    while (!this.hasAnybodyWon()) {
    // let i = 202;
    // while (i > 0) {
      this.playRound();
      this.finalTally();
      this.startingPlayerIndex += 1;
      this.startOfRoundMove = (this.startingPlayerIndex + 1) % this.PLAYERS.length;
      // i--;
    } 

    console.log("game Over")


    return this.hasAnybodyWon();
  }

}

let currentGame = new Game();
setTimeout(() => currentGame.playGame(), 1000);



module.exports = Game;