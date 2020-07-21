export default class ComputerPlayer {
  constructor(team, id, canvas, game) {
    this.ctx = canvas.getContext("2d");
    this.game = game
    this.team = team;
    this.currentHand = [];
    this.id = id;
    this.addCard = this.addCard.bind(this);
    this.promptMove = this.promptMove.bind(this);
    this.renderThrow = this.renderThrow.bind(this);
    this.positions = {
      1: { 
        rot: -90,
        one: -195,
        two: -295,
        three: -395,
        four: -495,
        five: -595,
        card1to5yPos: 1040,
        thrownCardyPos: 820
      },
      2: { 
        rot: 180,
        one: -445,
        two: -545,
        three: -645,
        four: -745,
        five: -845,
        card1to5yPos: -80,
        thrownCardyPos: -260
      },
      3: { 
        rot: 90,
        one: 105,
        two: 205,
        three: 305,
        four: 405,
        five: 505,
        card1to5yPos: -160,
        thrownCardyPos: -380
      }
    };
}

  renderThrow(num) {
    let pI = this.positions[this.id];
    
    let firstCard = new Image();
    let secondCard = new Image();
    let thirdCard = new Image();
    let fourthCard = new Image();
    let fifthCard = new Image();
    let throwCard = new Image();

    throwCard.src = this.currentHand[num].imageUrl;

    if (this.currentHand.length !== 0 && num !== 0) {
      firstCard.src = "./src/public/images/card-back-rename.JPG"
    } else {
      firstCard.src = "./src/public/images/no-card.png"
    };
    if (this.currentHand.length > 1 && num !== 1) {
      secondCard.src = "./src/public/images/card-back-rename.JPG"
    } else {
      secondCard.src = "./src/public/images/no-card.png"
    };
    if (this.currentHand.length > 2 && num !== 2) {
      thirdCard.src = "./src/public/images/card-back-rename.JPG"
    } else {
      thirdCard.src = "./src/public/images/no-card.png"
    };
    if (this.currentHand.length > 3 && num !== 3) {
      fourthCard.src = "./src/public/images/card-back-rename.JPG"
    } else {
      fourthCard.src = "./src/public/images/no-card.png"
    };
    if (this.currentHand.length > 4 && num !== 4) {
      fifthCard.src = "./src/public/images/card-back-rename.JPG"
    } else {
      fifthCard.src = "./src/public/images/no-card.png"
    };

    setTimeout(() => {
      this.ctx.save();
      this.ctx.rotate(pI.rot * (Math.PI / 180));
      this.ctx.drawImage(firstCard, pI.one, pI.card1to5yPos, 90, 160);
      this.ctx.drawImage(secondCard, pI.two, pI.card1to5yPos, 90, 160);
      this.ctx.drawImage(thirdCard, pI.three, pI.card1to5yPos, 90, 160);
      this.ctx.drawImage(fourthCard, pI.four, pI.card1to5yPos, 90, 160);
      this.ctx.drawImage(fifthCard, pI.five, pI.card1to5yPos, 90, 160);
      this.ctx.drawImage(throwCard, pI.three, pI.thrownCardyPos, 90, 160);
      this.ctx.restore();
    }, 500);

  }

  addCard(card) {
    if (this.currentHand.length < 5) {
      card.owner = this;
      card.team = this.team;
      this.currentHand.push(card);
    } else {
      console.log("cpu trying to draw again.  IDK WHY!")
      return
    }
  };

  promptMove() {
    let toThrowIdx = Math.floor(Math.random() * this.currentHand.length);
    let cardToThrow = this.currentHand[toThrowIdx];
    this.renderThrow(toThrowIdx)

    this.currentHand = this.currentHand
      .slice(0, toThrowIdx)
      .concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));

    this.game.thrownCards.push(cardToThrow);


    if (this.game.thrownCards.length === 4) {
      setTimeout(() => this.game.winningCardThrown(this.game), 2500);
    } else {
      this.game.nextThrow();
    }

    return cardToThrow;
  };
};
