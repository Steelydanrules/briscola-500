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
  }

  playRound = () => {

    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.currentDeck.shuffleDeck();
    this._dealCards();
    let startOfRoundMove = this.startingPlayerIndex;
    while (this.thisRoundIsNotOver()) {
    
    this.playMove(startingMove)
    


    }
    startOfRoundMove = (this.startingPlayerIndex + 1) % PLAYERS.length;
    this.finalTally();
  }



  playMove(startingMove) {
    

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



  playGame() {
    while (!this.hasAnybodyWon()) {
      this.playRound();
      this.finalTally();
    }


    

  }

}

module.exports = Game;