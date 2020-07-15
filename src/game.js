import ComputerPlayer from "./computer.js";
import HumanPlayer from "./human.js";
import Deck from "./deck.js";
import Team from "./team.js";

export default class Game {
  constructor(canvas) {
    this.currentBrisc = null;
    this.currentDeck = new Deck();
    this.startingPlayerIndex = 0;
    this.startOfRoundMove = this.startingPlayerIndex;
    this.thrownCards = [];
    this.ctx = canvas.getContext("2d");
    this.humanTeam = new Team("humanTeam");
    this.robotTeam = new Team("robotTeam");

    this.PLAYERS = [
      new HumanPlayer(this.humanTeam, 555, 440, 0, canvas, this),
      new ComputerPlayer(this.robotTeam, 1, 305, -380, 90, canvas, this),
      new ComputerPlayer(this.humanTeam, 2, -645, -260, 180, canvas, this),
      new ComputerPlayer(this.robotTeam, 3, 555, 440, 0, canvas, this),
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
    this.promptTurn = this.promptTurn.bind(this);
    this.renderThisUsersThrow = this.renderThisUsersThrow.bind(this);
    this.playMove = this.playMove.bind(this);
    this.playHand = this.playHand.bind(this);
    this.hasAnybodyWon = this.hasAnybodyWon.bind(this);
    this.playGame = this.playGame.bind(this);

  };

  drawInitialBoard() {
  let totalLoaded = 0;
  let faceDown = new Image();
  let noCard = new Image();
  faceDown.src = "../images/card-back-rename.jpg";
  noCard.src = "../images/no-card.png";
  let humanPlayerHand = this.PLAYERS[0].currentHand;
  let firstCard = new Image();
  let secondCard = new Image();
  let thirdCard = new Image();
  let fourthCard = new Image();
  let fifthCard = new Image();

  if (humanPlayerHand.length > 0) {
    firstCard.src = humanPlayerHand[0].imageUrl
  } else {
    firstCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 1) {
    secondCard.src = humanPlayerHand[1].imageUrl
  } else {
    secondCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 2) {
    thirdCard.src = humanPlayerHand[2].imageUrl
  } else {
    thirdCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 3) {
    fourthCard.src = humanPlayerHand[3].imageUrl
  } else {
    fourthCard.src = "../images/no-card.png"
  }
  if (humanPlayerHand.length > 4) {
    fifthCard.src = humanPlayerHand[4].imageUrl
  } else {
    fifthCard.src = "../images/no-card.png"
  }

    setTimeout(() => {
      console.log("drawint")
      this.ctx.save();
      this.ctx.rotate(-90 * (Math.PI / 180));

      // right comp
      this.ctx.drawImage(faceDown, -195, 1040, 90, 160);    
      this.ctx.drawImage(faceDown, -295, 1040, 90, 160);
      this.ctx.drawImage(faceDown, -395, 1040, 90, 160);
      this.ctx.drawImage(faceDown, -495, 1040, 90, 160);
      this.ctx.drawImage(faceDown, -595, 1040, 90, 160);
      this.ctx.drawImage(noCard, -395, 820, 90, 160);

      // deck
      this.ctx.drawImage(faceDown, -395, 520, 90, 160);

      this.ctx.restore();
      this.ctx.save();
      this.ctx.rotate(90 * (Math.PI / 180));

      //left cpu
      this.ctx.drawImage(faceDown, 105, -160, 90, 160);
      this.ctx.drawImage(faceDown, 205, -160, 90, 160);
      this.ctx.drawImage(faceDown, 305, -160, 90, 160);
      this.ctx.drawImage(faceDown, 405, -160, 90, 160);
      this.ctx.drawImage(faceDown, 505, -160, 90, 160);
      this.ctx.drawImage(noCard, 305, -380, 90, 160);
    
      this.ctx.restore();
      this.ctx.save();
      this.ctx.rotate(180 * (Math.PI / 180));

      //partner
      this.ctx.drawImage(faceDown, -445, -80, 90, 160);
      this.ctx.drawImage(faceDown, -545, -80, 90, 160);
      this.ctx.drawImage(faceDown, -645, -80, 90, 160);
      this.ctx.drawImage(faceDown, -745, -80, 90, 160);
      this.ctx.drawImage(faceDown, -845, -80, 90, 160);
      this.ctx.drawImage(noCard, -645, -260, 90, 160);
  
      this.ctx.restore();

      this.ctx.drawImage(firstCard, 355, 620, 90, 160);
      this.ctx.drawImage(secondCard, 455, 620, 90, 160);
      this.ctx.drawImage(thirdCard, 555, 620, 90, 160);
      this.ctx.drawImage(fourthCard, 655, 620, 90, 160);
      this.ctx.drawImage(fifthCard, 755, 620, 90, 160);
      // this.ctx.drawImage(noCard, 555, 440, 90, 160);
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
    console.log(this.thrownCards)
    console.log("the round is over and above are the thrown cards")
    
    if (this.thrownCards.length !== 4) return;
    // if (this.thrownCards.indexOf(undefined) !== -1) return;

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

  promptTurn(user, numberOfCards) {
    if (this.thrownCards.length === numberOfCards) {
      this.playMove(user);
    } 
  }

  renderThisUsersThrow(card, user) {
    let cardFace = new Image();
    cardFace.src = card.imageUrl;
    cardFace.onload = () => {
      this.ctx.save();
      this.ctx.rotate(user.rotAmt * (Math.PI / 180));
      this.ctx.drawImage(cardFace, user.xPos, user.yPos, 90, 160);
      this.ctx.restore();
    }
  }

  playMove(user) {
    let cardToThrow = user.promptMove();
    this.thrownCards.push(cardToThrow);
    this.renderThisUsersThrow(user);
  }

  playHand() {    
    let firstToThrow = this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)];
    let secondToThrow = this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)];
    let thirdToThrow = this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)];
    let lastToThrow = this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)];
    
    firstToThrow.promptMove();
    secondToThrow.promptMove();
    thirdToThrow.promptMove();
    lastToThrow.promptMove();


    if (this.cardsThrown[0] === undefined ||
      this.cardsThrown[1] === undefined ||
      this.cardsThrown[2] === undefined ||
      this.cardsThrown[3] === undefined
      ) {
      this.winningCardThrown();
    } else {
      setTimeout(this.winningCardThrown, 500);
    }


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
    if (
      this.humanTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore > this.humanTeam.totalGameScore
    ) {
      return true;
    } else if (
      this.humanTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore >= 500 &&
      this.robotTeam.totalGameScore <= this.humanTeam.totalGameScore
      ) {
      return true;
    } else if (this.humanTeam.totalGameScore >= 500) {
      return true;
    } else if (this.robotTeam.totalGameScore >= 500) {
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
        this.startingPlayerIndex += 1;
        this.startOfRoundMove = (this.startingPlayerIndex + 1) % this.PLAYERS.length;
      } 

  
      console.log("game Over")
      console.log(this.humanTeam.totalGameScore)
      console.log(this.robotTeam.totalGameScore)

      return
  }

}
