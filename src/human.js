export default class HumanPlayer {
  constructor(team, canvas, game) {
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
    this.clearBrisc = this.clearBrisc.bind(this);
    this.modifyBriscPoints = this.modifyBriscPoints.bind(this);
    this.actualBriscs = [];
  }

  briscAvailable() {
    if (this.currentHand.length < 3) {
      this.actualBriscs = [];
      this.possibleBriscs = {
        "DENARI": 0,
        "SPADE": 0,
        "COPPE": 0,
        "BASTONI": 0
      };
      return
    }; 

    for (let suit in this.possibleBriscs) {
      if (this.possibleBriscs[suit] > 6) {
        this.actualBriscs.push(suit);
      }
    }

    return this.actualBriscs;
  };

  clearBrisc(suit){
    this.possibleBriscs[suit] = 0;
  }

  modifyBriscPoints(card) {
    if (card.points === 3 || card.points === 4 && this.possibleBriscs[card.suit] !== 0) {
      this.possibleBriscs[card.suit] -= card.points;
    }

  }

  renderBriscCards(){

    const blockBrisc = new Image();
    blockBrisc.src = "../images/no-card.png"

    const kingGold = new Image(); //DENARI
    if (this.possibleBriscs["DENARI"] === 4 || this.possibleBriscs["DENARI"] === 7) {
    kingGold.src = "../images/KGold.png"
    } else {
    kingGold.src = "../images/card-back-rename.JPG"
    };

    const queenGold = new Image();
    if (this.possibleBriscs["DENARI"] === 3 || this.possibleBriscs["DENARI"] === 7) {
    queenGold.src = "../images/QGold.png"
    } else {
    queenGold.src = "../images/card-back-rename.JPG"
    };

    const kingSwords = new Image(); //SPADE
    if (this.possibleBriscs["SPADE"] === 4 || this.possibleBriscs["SPADE"] === 7) {
    kingSwords.src = "../images/KSwords.png"
    } else {
    kingSwords.src = "../images/card-back-rename.JPG"
    };

    const queenSwords = new Image();
    if (this.possibleBriscs["SPADE"] === 3 || this.possibleBriscs["SPADE"] === 7) {
    queenSwords.src = "../images/QSwords.png"
    } else {
    queenSwords.src = "../images/card-back-rename.JPG"
    };

    const kingCups = new Image(); //COPPE
    if (this.possibleBriscs["COPPE"] === 4 || this.possibleBriscs["COPPE"] === 7) {
    kingCups.src = "../images/KCups.png"
    } else {
    kingCups.src = "../images/card-back-rename.JPG"
    };

    const queenCups = new Image();
    if (this.possibleBriscs["COPPE"] === 3 || this.possibleBriscs["COPPE"] === 7) {
    queenCups.src = "../images/QCups.png"
   } else {
    queenCups.src = "../images/card-back-rename.JPG"
    };

    const kingBats = new Image(); //BASTONI
    if (this.possibleBriscs["BASTONI"] === 4 || this.possibleBriscs["BASTONI"] === 7) {
    kingBats.src = "../images/KBats.png"
    } else {
    kingBats.src = "../images/card-back-rename.JPG"
    };

    const queenBats = new Image();
    if (this.possibleBriscs["BASTONI"] === 3 || this.possibleBriscs["BASTONI"] === 7) {
    queenBats.src = "../images/QBats.png"
    } else {
    queenBats.src = "../images/card-back-rename.JPG"
    };


    setTimeout(() => {
      this.ctx.drawImage(blockBrisc, 855, 600, 350, 185); //move this!!

      this.ctx.drawImage(kingGold, 875, 640, 45, 80); //move this!!
      this.ctx.drawImage(queenGold, 900, 690, 45, 80); //move this!!

      this.ctx.drawImage(kingSwords, 950, 640, 45, 80); //move this!!
      this.ctx.drawImage(queenSwords, 975, 690, 45, 80); //move this!!

      this.ctx.drawImage(kingCups, 1025, 640, 45, 80); //move this!!
      this.ctx.drawImage(queenCups, 1050, 690, 45, 80); //move this!!

      this.ctx.drawImage(kingBats, 1100, 640, 45, 80); //move this!!
      this.ctx.drawImage(queenBats, 1125, 690, 45, 80); //move this!!


      this.ctx.font = "24px Georgia";
      this.ctx.fillStyle = "red"
      this.ctx.fillText("Call a brisc on your turn!!!!", 900, 630);
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
      firstCard.src = "../images/no-card.png"
    };
    if (this.currentHand.length > 1 && num !== 1) {
      secondCard.src = this.currentHand[1].imageUrl
    } else {
      secondCard.src = "../images/no-card.png"
    };
    if (this.currentHand.length > 2 && num !== 2) {
      thirdCard.src = this.currentHand[2].imageUrl
    } else {
      thirdCard.src = "../images/no-card.png"
    };
    if (this.currentHand.length > 3 && num !== 3) {
      fourthCard.src = this.currentHand[3].imageUrl
    } else {
      fourthCard.src = "../images/no-card.png"
    };
    if (this.currentHand.length > 4 && num !== 4) {
      fifthCard.src = this.currentHand[4].imageUrl
    } else {
      fifthCard.src = "../images/no-card.png"
    };

    setTimeout(() => {
      this.ctx.drawImage(firstCard, 355, 620, 90, 160);
      this.ctx.drawImage(secondCard, 455, 620, 90, 160);
      this.ctx.drawImage(thirdCard, 555, 620, 90, 160);
      this.ctx.drawImage(fourthCard, 655, 620, 90, 160);
      this.ctx.drawImage(fifthCard, 755, 620, 90, 160);
      this.ctx.drawImage(throwCard, 555, 440, 90, 160);
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
    e.preventDefault();
    console.log(e.pageX, e.pageY);
    if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 0) {
      this.renderThrow(0)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(0);
    } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 1) {
      this.renderThrow(1)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(1);
    } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 2) {
      this.renderThrow(2)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(2);
    } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 3) {
      this.renderThrow(3)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(3);
    } else if (e.pageX > 865 && e.pageX < 955 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 4) {
      this.renderThrow(4)
      this.removeEventListeners();
      setTimeout( () => this.game.nextThrow(), 0);
      return this.throwCard(4);
    }
  }

  //brisc calling shit
//         this.ctx.font = "24px Georgia";
// this.ctx.fillStyle = "red"

// this.ctx.fillText("Call a Brisc", 970, 640);

  registerEventListeners() {
    document.addEventListener("mousedown", this.handleMouseDown);
  }
  
  removeEventListeners() {
    document.removeEventListener("mousedown", this.handleMouseDown);
  }

  promptMove() {
    this.briscAvailable();
    console.log(this.possibleBriscs);

    // console.log(briscAvailable)
    // if (briscAvailable.length > 1) {
    //   // this.registerBriscCallingEventListeners();
    //   console.log("brisc avail")
    // }

    this.registerEventListeners();
  };

};
