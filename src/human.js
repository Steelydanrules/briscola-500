export default class HumanPlayer {
  constructor(team, canvas, game) {
    this.game = game;
    this.ctx = canvas.getContext("2d");
    this.game = game
    this.team = team;
    this.currentHand = [];
    this.id = 0;
    this.possibleBriscs = { 
      "DENARI": 0, 
      "SPADE": 0, 
      "COPPE": 0, 
      "BASTONI": 0 };
    this.briscAvailable = this.briscAvailable.bind(this);
    this.addCard = this.addCard.bind(this);
    this.throwCard = this.throwCard.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.registerEventListeners = this.registerEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.promptMove = this.promptMove.bind(this);
    this.renderThrow = this.renderThrow.bind(this);
    this.registerEventListeners();
    this.renderBriscCards = this.renderBriscCards.bind(this);
    this.modifyBriscPoints = this.modifyBriscPoints.bind(this);
  }

  briscAvailable() {
    if (this.currentHand.length < 3) {
      this.possibleBriscs = {
        "DENARI": 0,
        "SPADE": 0,
        "COPPE": 0,
        "BASTONI": 0
      };
      return
    }; 
  };

  modifyBriscPoints(card) {
    if (card.points === 3 || card.points === 4 && this.possibleBriscs[card.suit] !== 0) {
      this.possibleBriscs[card.suit] -= card.points;
    }
  }

  renderBriscCards(){

    const blockBrisc = new Image();
    blockBrisc.src = "src/public/images/no-card.png"

    const kingGold = new Image(); //DENARI
    if (this.possibleBriscs["DENARI"] === 4 || this.possibleBriscs["DENARI"] === 7) {
    kingGold.src = "src/public/images/KGold.png"
    } else {
    kingGold.src = "src/public/images/card-back-rename.JPG"
    };

    const queenGold = new Image();
    if (this.possibleBriscs["DENARI"] === 3 || this.possibleBriscs["DENARI"] === 7) {
    queenGold.src = "src/public/images/QGold.png"
    } else {
    queenGold.src = "src/public/images/card-back-rename.JPG"
    };

    const kingSwords = new Image(); //SPADE
    if (this.possibleBriscs["SPADE"] === 4 || this.possibleBriscs["SPADE"] === 7) {
    kingSwords.src = "src/public/images/KSwords.png"
    } else {
    kingSwords.src = "src/public/images/card-back-rename.JPG"
    };

    const queenSwords = new Image();
    if (this.possibleBriscs["SPADE"] === 3 || this.possibleBriscs["SPADE"] === 7) {
    queenSwords.src = "src/public/images/QSwords.png"
    } else {
    queenSwords.src = "src/public/images/card-back-rename.JPG"
    };

    const kingCups = new Image(); //COPPE
    if (this.possibleBriscs["COPPE"] === 4 || this.possibleBriscs["COPPE"] === 7) {
    kingCups.src = "src/public/images/KCups.png"
    } else {
    kingCups.src = "src/public/images/card-back-rename.JPG"
    };

    const queenCups = new Image();
    if (this.possibleBriscs["COPPE"] === 3 || this.possibleBriscs["COPPE"] === 7) {
    queenCups.src = "src/public/images/QCups.png"
   } else {
    queenCups.src = "src/public/images/card-back-rename.JPG"
    };

    const kingBats = new Image(); //BASTONI
    if (this.possibleBriscs["BASTONI"] === 4 || this.possibleBriscs["BASTONI"] === 7) {
    kingBats.src = "src/public/images/KBats.png"
    } else {
    kingBats.src = "src/public/images/card-back-rename.JPG"
    };

    const queenBats = new Image();
    if (this.possibleBriscs["BASTONI"] === 3 || this.possibleBriscs["BASTONI"] === 7) {
    queenBats.src = "src/public/images/QBats.png"
    } else {
    queenBats.src = "src/public/images/card-back-rename.JPG"
    };


    setTimeout(() => {
      this.ctx.drawImage(blockBrisc, 743, 500, 350, 185);

      this.ctx.drawImage(kingGold, 750, 530, 35, 65);
      this.ctx.drawImage(queenGold, 770, 580, 35, 65);

      this.ctx.drawImage(kingSwords, 810, 530, 35, 65);
      this.ctx.drawImage(queenSwords, 830, 580, 35, 65);

      this.ctx.drawImage(kingCups, 870, 530, 35, 65);
      this.ctx.drawImage(queenCups, 890, 580, 35, 65);

      this.ctx.drawImage(kingBats, 930, 530, 35, 65);
      this.ctx.drawImage(queenBats, 950, 580, 35, 65);


      this.ctx.font = "24px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Call a brisc on your turn", 743, 522);
    }, 250)


  }

  addCard(card) {
    if (this.currentHand.length < 5) {
      if (card.points === 3 || card.points === 4) {
        this.possibleBriscs[card.suit] += card.points
      }
      card.owner = this;
      card.faceUp = true;
      card.team = this.team;
      this.currentHand.push(card);
    } else {
      console.log("human trying to draw again.  IDK WHY")
      return
    }
  };

  renderThrow(num) {
    let firstCard = new Image();
    let secondCard = new Image();
    let thirdCard = new Image();
    let fourthCard = new Image();
    let fifthCard = new Image();
    let throwCard = new Image();
    throwCard.src = this.currentHand[num].imageUrl;

    if (this.currentHand.length !== 0 && num !== 0) {
      firstCard.src = this.currentHand[0].imageUrl
    } else {
      firstCard.src = "src/public/images/no-card.png"
    };
    if (this.currentHand.length > 1 && num !== 1) {
      secondCard.src = this.currentHand[1].imageUrl
    } else {
      secondCard.src = "src/public/images/no-card.png"
    };
    if (this.currentHand.length > 2 && num !== 2) {
      thirdCard.src = this.currentHand[2].imageUrl
    } else {
      thirdCard.src = "src/public/images/no-card.png"
    };
    if (this.currentHand.length > 3 && num !== 3) {
      fourthCard.src = this.currentHand[3].imageUrl
    } else {
      fourthCard.src = "src/public/images/no-card.png"
    };
    if (this.currentHand.length > 4 && num !== 4) {
      fifthCard.src = this.currentHand[4].imageUrl
    } else {
      fifthCard.src = "src/public/images/no-card.png"
    };

    setTimeout(() => {
      this.ctx.drawImage(firstCard, 300, 505, 81, 144);
      this.ctx.drawImage(secondCard, 390, 505, 81, 144);
      this.ctx.drawImage(thirdCard, 480, 505, 81, 144);
      this.ctx.drawImage(fourthCard, 570, 505, 81, 144);
      this.ctx.drawImage(fifthCard, 660, 505, 81, 144);
      this.ctx.drawImage(throwCard, 480, 345, 81, 144);
    }, 500);
}

  throwCard(selectedIdx) {
    let cardToThrow = this.currentHand[selectedIdx];
    this.currentHand = this.currentHand
      .slice(0, selectedIdx)
      .concat(this.currentHand.slice(selectedIdx + 1, this.currentHand.length));

    this.game.thrownCards.push(cardToThrow);
    this.modifyBriscPoints(cardToThrow);

    if (this.game.thrownCards.length === 4) {
      setTimeout(() => this.game.winningCardThrown(this.game), 2500);
    }
    return cardToThrow;
  }

  handleMouseDown(e) {
    console.log(e.pageY, "Y")
    console.log(e.pageX, "X")
    
    let gameBoard = document.getElementsByClassName("game-board-container")
    let margin = gameBoard[0].offsetWidth
    
    if (margin <= 1200) {
      margin = 0;
    } else {
      margin = ((margin - 1200) / 2) - 105
    };

    e.preventDefault();
    if (e.pageX > (margin + 963) && e.pageX < (margin + 1018) && 
      e.pageY > 611 && e.pageY < 726 &&
      this.possibleBriscs["DENARI"] === 7) {
      this.possibleBriscs["DENARI"] = 0;
      this.game.callBrisc("DENARI", this);
      this.renderBriscCards();
    };

    if (e.pageX > (margin + 1023) && e.pageX < (margin + 1078) && 
      e.pageY > 611 && e.pageY < 726 &&
      this.possibleBriscs["SPADE"] === 7) {
      this.possibleBriscs["SPADE"] = 0;
      this.game.callBrisc("SPADE", this);
      this.renderBriscCards();
    };

    if (e.pageX > (margin + 1083) && e.pageX < (margin + 1138) && 
      e.pageY > 611 && e.pageY < 726 &&
      this.possibleBriscs["COPPE"] === 7) {
      this.possibleBriscs["COPPE"] = 0;
      this.game.callBrisc("COPPE", this);
      this.renderBriscCards();
    };

    if (e.pageX > (margin + 1143) && e.pageX < (margin + 1198) && 
      e.pageY > 611 && e.pageY < 726 &&
      this.possibleBriscs["BASTONI"] === 7) {
      this.possibleBriscs["BASTONI"] = 0;
      this.game.callBrisc("BASTONI", this);
      this.renderBriscCards();
    };

    if (e.pageX > (margin + 513) && e.pageX < (margin + 594) && e.pageY > 585 && e.pageY < 729 && this.currentHand.length > 0) {
      this.renderThrow(0)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(0);
    } else if (e.pageX > (margin + 603) && e.pageX < (margin + 684) && e.pageY > 585 && e.pageY < 729 && this.currentHand.length > 1) {
      this.renderThrow(1)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(1);
    } else if (e.pageX > (margin + 693) && e.pageX < (margin + 774) && e.pageY > 585 && e.pageY < 729 && this.currentHand.length > 2) {
      this.renderThrow(2)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(2);
    } else if (e.pageX > (margin + 783) && e.pageX < (margin + 864) && e.pageY > 585 && e.pageY < 729 && this.currentHand.length > 3) {
      this.renderThrow(3)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(3);
    } else if (e.pageX > (margin + 873) && e.pageX < (margin + 954) && e.pageY > 585 && e.pageY < 729 && this.currentHand.length > 4) {
      this.renderThrow(4)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(4);
    }
  }

  registerEventListeners() {
    document.addEventListener("mousedown", this.handleMouseDown);
  }
  
  removeEventListeners() {
    document.removeEventListener("mousedown", this.handleMouseDown);
  }

  promptMove() {
    this.briscAvailable();
    this.registerEventListeners();
  };

};
