import ComputerPlayer from "./computer.js";
import HumanPlayer from "./human.js";
import Deck from "./deck.js";
import Team from "./team.js";

export default class Game {
  constructor(canvas) {
    this.currentBrisc = [];
    this.currentDeck = new Deck();
    this.startOfEntireRound = 0;
    this.startOfThisHand = 0;
    this.thrownCards = [];
    this.lastHand = {};
    this.ctx = canvas.getContext("2d");
    this.humanTeam = new Team("humanTeam");
    this.robotTeam = new Team("robotTeam");

    this.PLAYERS = [
      new HumanPlayer(this.humanTeam, canvas, this),
      new ComputerPlayer(this.robotTeam, 1, canvas, this),
      new ComputerPlayer(this.humanTeam, 2, canvas, this),
      new ComputerPlayer(this.robotTeam, 3, canvas, this),
    ];

    this.drawInitialBoard = this.drawInitialBoard.bind(this);
    this._dealCards = this._dealCards.bind(this);
    this.callBrisc = this.callBrisc.bind(this);
    this.addCardsValue = this.addCardsValue.bind(this);
    this.finalTally = this.finalTally.bind(this);
    this.winningCardThrown = this.winningCardThrown.bind(this);
    this.hasAnybodyWon = this.hasAnybodyWon.bind(this);
    this.eachPlayerDraws = this.eachPlayerDraws.bind(this);
    this.nextThrow = this.nextThrow.bind(this);
    this.populateLastHand = this.populateLastHand.bind(this);
    this.restartGame = this.restartGame.bind(this);
  };

  drawInitialBoard() {
  const faceDown = new Image();
  const noCard = new Image();
  faceDown.src = "src/public/images/card-back-rename.JPG";
  noCard.src = "src/public/images/no-card.png";
  const humanPlayerHand = this.PLAYERS[0].currentHand;
  const firstCard = new Image();
  const secondCard = new Image();
  const thirdCard = new Image();
  const fourthCard = new Image();
  const fifthCard = new Image();
  const cpuFirstCard = new Image();
  const cpuSecondCard = new Image();
  const cpuThirdCard = new Image();
  const cpuFourthCard = new Image();
  const cpuFifthCard = new Image();


  const lastUser = new Image();
  const lastCPU1 = new Image();
  const lastCPU2 = new Image();
  const lastCPU3 = new Image();

    if (this.lastHand[0] === undefined) {

    lastUser.src = "src/public/images/no-card.png"; 
    lastCPU1.src = "src/public/images/no-card.png"; 
    lastCPU2.src = "src/public/images/no-card.png"; 
    lastCPU3.src = "src/public/images/no-card.png";
  } else {
    lastUser.src = this.lastHand[0].imageUrl;
    lastCPU1.src = this.lastHand[1].imageUrl;
    lastCPU2.src = this.lastHand[2].imageUrl;
    lastCPU3.src = this.lastHand[3].imageUrl;
  }


  if (humanPlayerHand.length > 0) {
    firstCard.src = humanPlayerHand[0].imageUrl;
    cpuFirstCard.src = "src/public/images/card-back-rename.JPG"
  } else {
    firstCard.src = "src/public/images/no-card.png";
    cpuFirstCard.src = "src/public/images/no-card.png"
  }
  if (humanPlayerHand.length > 1) {
    secondCard.src = humanPlayerHand[1].imageUrl;
    cpuSecondCard.src = "src/public/images/card-back-rename.JPG"
  } else {
    secondCard.src = "src/public/images/no-card.png";
    cpuSecondCard.src = "src/public/images/no-card.png"
  }
  if (humanPlayerHand.length > 2) {
    thirdCard.src = humanPlayerHand[2].imageUrl;
    cpuThirdCard.src = "src/public/images/card-back-rename.JPG"
  } else {
    thirdCard.src = "src/public/images/no-card.png";
    cpuThirdCard.src = "src/public/images/no-card.png"
  }
  if (humanPlayerHand.length > 3) {
    fourthCard.src = humanPlayerHand[3].imageUrl;
    cpuFourthCard.src = "src/public/images/card-back-rename.JPG"
  } else {
    fourthCard.src = "src/public/images/no-card.png";
    cpuFourthCard.src = "src/public/images/no-card.png"
  }
  if (humanPlayerHand.length > 4) {
    fifthCard.src = humanPlayerHand[4].imageUrl;
    cpuFifthCard.src = "src/public/images/card-back-rename.JPG"
  } else {
    fifthCard.src = "src/public/images/no-card.png";
    cpuFifthCard.src = "src/public/images/no-card.png"
  }


    setTimeout(() => {
      this.ctx.save();
      this.ctx.rotate(-90 * (Math.PI / 180));

      // right comp
      this.ctx.drawImage(cpuFirstCard, -195, 1040, 90, 160);    
      this.ctx.drawImage(cpuSecondCard, -295, 1040, 90, 160);
      this.ctx.drawImage(cpuThirdCard, -395, 1040, 90, 160);
      this.ctx.drawImage(cpuFourthCard, -495, 1040, 90, 160);
      this.ctx.drawImage(cpuFifthCard, -595, 1040, 90, 160);
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
      this.ctx.drawImage(cpuFifthCard, 505, -160, 90, 160);
      this.ctx.drawImage(noCard, 305, -380, 90, 160);
    
      this.ctx.restore();
      this.ctx.save();
      this.ctx.rotate(180 * (Math.PI / 180));

      //partner
      this.ctx.drawImage(cpuFirstCard, -445, -80, 90, 160);
      this.ctx.drawImage(cpuSecondCard, -545, -80, 90, 160);
      this.ctx.drawImage(cpuThirdCard, -645, -80, 90, 160);
      this.ctx.drawImage(cpuFourthCard, -745, -80, 90, 160);
      this.ctx.drawImage(cpuFifthCard, -845, -80, 90, 160);
      this.ctx.drawImage(noCard, -645, -260, 90, 160);
  
      this.ctx.restore();

      if (this.currentDeck.cardsInDeck.length > 0) {
        this.ctx.font = "36px Georgia";
        this.ctx.fillStyle = "red"
        this.ctx.fillText(this.currentDeck.cardsInDeck.length, 583, 360);
      }

      this.ctx.drawImage(noCard, 0, 0, 350, 90); //move this!!
      this.ctx.drawImage(noCard, 865, 0, 350, 90); //move this!!


      this.ctx.font = "24px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Total Game Score (first to 500)", 15, 20);
      this.ctx.fillText("Current Round Score", 900, 20);

      this.ctx.font = "16px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Your Team                            Other Team", 50, 35);
      this.ctx.fillText("Your Team                            Other Team", 875, 35);

      this.ctx.font = "24px Georgia";
      this.ctx.fillStyle = "whitesmoke"
      this.ctx.fillText(this.humanTeam.totalGameScore, 75, 60);
      this.ctx.fillText(this.robotTeam.totalGameScore, 265, 60);

      this.ctx.fillText(this.humanTeam.currentRoundScore, 900, 60);
      this.ctx.fillText(this.robotTeam.currentRoundScore, 1100, 60);


      this.ctx.drawImage(firstCard, 355, 620, 90, 160);
      this.ctx.drawImage(secondCard, 455, 620, 90, 160);
      this.ctx.drawImage(thirdCard, 555, 620, 90, 160);
      this.ctx.drawImage(fourthCard, 655, 620, 90, 160);
      this.ctx.drawImage(fifthCard, 755, 620, 90, 160);

      this.ctx.drawImage(lastUser, 155, 700, 45, 80);
      this.ctx.drawImage(lastCPU1, 205, 665, 45, 80);
      this.ctx.drawImage(lastCPU2, 155, 610, 45, 80);
      this.ctx.drawImage(lastCPU3, 105, 665, 45, 80);

      this.ctx.drawImage(noCard, 555, 440, 90, 160);
    }, 350);
  };

  _dealCards() {
    if (this.PLAYERS[0].currentHand.length !== 0) return

    const noCard = new Image();
    noCard.src = "src/public/images/no-card.png";


    setTimeout( () => {
      this.ctx.drawImage(noCard, 215, 500, 125, 150)}, 200);

    for (let i = 0; i < 5; i++) {

    this.PLAYERS.forEach(player => {
        let cardToDraw = this.currentDeck.cardsInDeck.pop();
        player.addCard(cardToDraw);
      }
    )};
  };
  
  callBrisc(suit, player) {
    console.log("calling")
    if (this.currentBrisc.length === 0) {
      this.currentBrisc.push(suit);
      player.team.currentRoundScore += 40;

      const briscCard = new Image();
      const noCard = new Image();
      noCard.src = "src/public/images/no-card.png";

      if (suit === "DENARI") {
        briscCard.src = "src/public/images/AGold.png"
      } else if (suit === "SPADE") {
        briscCard.src = "src/public/images/ASwords.png"
      } else if (suit === "COPPE") {
        briscCard.src = "src/public/images/ACups.png"
      } else if (suit === "BASTONI") {
        briscCard.src = "src/public/images/ABats.png"
      } else {
        briscCard.src = "src/public/images/no-card.png"
      };

      setTimeout(() => {
      this.ctx.font = "16px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Current Brisc:", 230, 535);
      this.ctx.drawImage(briscCard, 255, 550, 45, 80);
      this.ctx.drawImage(noCard, 865, 0, 350, 90);
      this.ctx.font = "24px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Current Round Score", 900, 20);
      this.ctx.font = "16px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Your Team                            Other Team", 50, 35);
      this.ctx.fillText("Your Team                            Other Team", 875, 35);

      this.ctx.font = "24px Georgia";
      this.ctx.fillStyle = "whitesmoke"
      this.ctx.fillText(this.humanTeam.currentRoundScore, 900, 60);
      this.ctx.fillText(this.robotTeam.currentRoundScore, 1100, 60);

      }, 200);

    } else if (this.currentBrisc.indexOf(suit) === -1) {
      this.currentBrisc.push(suit);
      player.team.currentRoundScore += 20;
    }
  };
  
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

  winningCardThrown() {
    if (this === undefined) return;
    if (this.thrownCards.length !== 4) {
      console.log("NOT YET!!!")
      return
    }

    let highestCard = this.thrownCards[0];
    let suitToBeat = this.thrownCards[0].suit;

      // winning card no brisc
      for (let i = 1; i < 4; i++) {
        let thisThrown = this.thrownCards[i];
        if (thisThrown.rank > highestCard.rank
        && thisThrown.suit === suitToBeat) {
          highestCard = thisThrown;
        }
      }

      // winning card yes brisc
      if (this.currentBrisc.length !== 0) {
        suitToBeat = this.currentBrisc[0];
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



    this.populateLastHand();

    this.startOfThisHand = this.PLAYERS.indexOf(highestCard.owner);
    this.thrownCards = [];


    // to draw or not
    if (this.currentDeck.cardsInDeck.length !== 0) {
      this.eachPlayerDraws(this.startOfThisHand);
    }
    // to play or not
    if (this.PLAYERS[0].currentHand.length !== 0) {
      this.playTurn();
    } else {
      setTimeout( () => this.restartGame(), 2500);
    }

    this.drawInitialBoard();
  }

  restartGame(){
    this.finalTally();
    if (!this.hasAnybodyWon()) {
    this.startOfEntireRound++;
    this.startOfThisHand = this.startOfEntireRound;
    this.currentBrisc = [];
    this.currentDeck = new Deck();
    this.thrownCards = [];
    this.lastHand = {};
    this.currentDeck.shuffleDeck();
    this._dealCards();
    this.playTurn();
    this.drawInitialBoard();
    } else {
      console.log("gamover");
    }

  }

  populateLastHand() {
    for (let i = 0; i < 4; i++) {
      let card = this.thrownCards[i];
      this.lastHand[card.owner.id] = card;
    }
  }

  nextThrow() {
    let secondToThrow = this.PLAYERS[((this.startOfThisHand + 1) % this.PLAYERS.length)];
    let thirdToThrow = this.PLAYERS[((this.startOfThisHand + 2) % this.PLAYERS.length)];
    let lastToThrow = this.PLAYERS[((this.startOfThisHand + 3) % this.PLAYERS.length)];

    if (this.thrownCards.length === 1) {
      setTimeout( () => secondToThrow.promptMove(), 1000)
    }

    if (this.thrownCards.length === 2) {
      setTimeout( () => thirdToThrow.promptMove(), 1000)
    }

    if (this.thrownCards.length === 3) {
      setTimeout( () => lastToThrow.promptMove(), 1000)
    }
  }

  playTurn() {
  this.PLAYERS[0].briscAvailable();
  this.PLAYERS[0].renderBriscCards();
  let firstToThrow = this.PLAYERS[((this.startOfThisHand + 0) % this.PLAYERS.length)];
  // let secondToThrow = this.PLAYERS[((this.startOfThisHand + 1) % this.PLAYERS.length)];
  // let thirdToThrow = this.PLAYERS[((this.startOfThisHand + 2) % this.PLAYERS.length)];
  // let lastToThrow = this.PLAYERS[((this.startOfThisHand + 3) % this.PLAYERS.length)];

  firstToThrow.promptMove();
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

  hasAnybodyWon() {
    if (this.humanTeam.totalGameScore >= 500 ||
      this.robotTeam.totalGameScore >= 500) {
        
      let modal = document.querySelector(".game-over")
      let myScore = document.querySelector(".my-score")
      let yourScore = document.querySelector(".their-score")

      myScore.value = this.humanTeam.totalGameScore;
      yourScore.value = this.robotTeam.totalGameScore;
      modal.style.display = "block";
        
      return true;
    } else {
      return false;
    }
  };
}
