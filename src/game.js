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

    this.humanTeam = new Team();
    this.robotTeam = new Team();
    
    // let human = new HumanPlayer(this.humanTeam);
    // let computer1 = new ComputerPlayer(this.robotTeam);
    // let computer2 = new ComputerPlayer(this.humanTeam);
    // let computer3 = new ComputerPlayer(this.robotTeam);

    this.PLAYERS = [
      new HumanPlayer(this.humanTeam),
      new ComputerPlayer(this.robotTeam),
      new ComputerPlayer(this.humanTeam),
      new ComputerPlayer(this.robotTeam),
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
  
  thisRoundIsNotOver = () => {
    if (this.PLAYERS[(this.startingPlayerIndex + 3) % 4].currentHand.length === 0) {
      return true;
    } else {
      return false;
    }
    //   this.PLAYERS.forEach((player) => {
    //     if (player.currentHand.length == 0) {
    //       console.log(player.currentHand.length);
    //       return false;
    //     }
    //   });

    // return true;

  };


  thisRoundOver = () => {
    if (this.PLAYERS[0].currentHand.length === 0) {
      return true;
    } else {
      return false;
    }


  }

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
    this.startOfRoundMove = this.PLAYERS.indexOf(highestCard.owner);
    this.thrownCards = [];
  }



  playHand = () => {
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)].promptMove());
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)].promptMove());
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)].promptMove());
    this.thrownCards.push(this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)].promptMove());
    this.winningCardThrown();
    console.log(this.currentDeck.cardsInDeck.length);
    if (this.currentDeck.cardsInDeck.length !== 0) {
    this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)].addCard(this.currentDeck.cardsInDeck.pop());
    }
  }

  hasAnybodyWon = () => {
    console.log(this.humanTeam.totalGameScore);
    console.log(this.robotTeam.totalGameScore);
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
      this.playRound();
      this.finalTally();
      this.startOfRoundMove = (this.startingPlayerIndex + 1) % this.PLAYERS.length;
    } 

    return this.hasAnybodyWon();
  }

}

let currentGame = new Game();
setTimeout(() => currentGame.playGame(), 1000);



module.exports = Game;