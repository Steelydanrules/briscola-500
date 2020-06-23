let Computer = require("./computer.js");
let Human = require("./human.js");
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
    
    PLAYERS = [
      new Human(this.humanTeam),
      new Computer(this.robotTeam),
      new Computer(this.humanTeam),
      new Computer(this.robotTeam)
    ];

    this.humanTeam = new Team(PLAYERS[0], PLAYERS[2]);
    this.robotTeam = new Team(PLAYERS[1], PLAYERS[3]);
    // this.hasAnybodyWon = this.hasAnybodyWon.bind(this)
  };

  _dealCards = () => {

    for (let i = 0; i < 5; i++) {

    PLAYERS.forEach(player => {
      let cardToDraw = currentDeck.pop();
      player.currentHand.push(cardToDraw);
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
    card.owner = player;
    player.addCard(card)
  }
  
  thisRoundIsNotOver = () => {
    if (this.currentDeck.cardsInDeck.length > 0) return true;

    PLAYERS.forEach(player => {
      if (player.currentHand.length !== 0) {
        return true;
      }
    });
    return false;
  };

  addCardsValue = (team) => {
    let currentRoundTally = 0;
    team.cardsWon.forEach(card => {
      currentRoundTally += card.points
    });

    team.currentRoundScore = currentRoundTally;
  }

  finalTally = () => {
    this.humanTeam.addTotalScore();
    this.robotTeam.addTotalScore();
    this.humanTeam.clearCardsWon();
    this.robotTeam.clearCardsWon();
  }

  playRound = () => {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.currentDeck.shuffleDeck();
    this._dealCards();


    while (this.thisRoundIsNotOver()) {    
    this.playHand();

    }
  }

  winningCardThrown = () => {
    let suitToBeat;
    let highestCard;

    if (this.currentBrisc) {

      if (this.thrownCards[0].suit === this.currentBrisc) {
        suitToBeat = this.currentBrisc;
        return
      } else if (this.thrownCards[1].suit === this.currentBrisc) {
        suitToBeat = this.currentBrisc;
        return
      } else if (this.thrownCards[2].suit === this.currentBrisc) {
        suitToBeat = this.currentBrisc;
        return
      } else if (this.thrownCards[3].suit === this.currentBrisc) {
        suitToBeat = this.currentBrisc;
        return
      } else {
        suitToBeat = this.thrownCards[0].suit;
        return
      }
    } else {
      suitToBeat = this.thrownCards[0].suit;
    };


    this.thrownCards.forEach(card => {
      if (card.suit !== suitToBeat) {
        return
      } else if (highestCard === undefined || highestCard.value < card.value) {
        highestCard = card;
      }
    });

    highestCard.owner.team.addHandToWinningPile(this.thrownCards);
    this.startOfRoundMove = PLAYERS.indexOf(highestCard.owner);
    this.thrownCards = [];
  }



  playHand = () => {
    setInterval(this.thrownCards.push(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 0].promptMove()), 5000);
    setInterval(this.thrownCards.push(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 1].promptMove()), 5000);
    setInterval(this.thrownCards.push(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 2].promptMove()), 5000);
    setInterval(this.thrownCards.push(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 3].promptMove()), 5000);
    this.winningCardThrown();
    setInterval(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 0].addCard(this.currentDeck.cardsInDeck.pop), 1000);
    setInterval(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 1].addCard(this.currentDeck.cardsInDeck.pop), 1000);
    setInterval(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 2].addCard(this.currentDeck.cardsInDeck.pop), 1000);
    setInterval(PLAYERS[(this.startOfRoundMove % PLAYERS.length) + 3].addCard(this.currentDeck.cardsInDeck.pop), 1000);
  }

  hasAnybodyWon = () => {
    if (this.humanTeam.totalGameScore >= 500 && this.robotTeam.totalGameScore >= 500) {
      if (this.humanTeam.totalGameScore > this.robotTeam.totalGameScore) {
        return this.humanTeam
      } else {
        return this.robotTeam
      }
    } else if (this.humanTeam.totalGameScore >= 500) {
      return this.humanTeam
    } else if (this.robotTeam.totalGameScore >= 500) {
      return this.robotTeam
    } else {
      return false;
    }
  };

  playGame = () => {
    while (!this.hasAnybodyWon()) {
      this.playRound();
      this.finalTally();
      this.startOfRoundMove = (this.startingPlayerIndex + 1) % PLAYERS.length;
    } 

    return this.hasAnybodyWon();
  }

}

module.exports = Game;