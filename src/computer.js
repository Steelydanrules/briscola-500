export default class ComputerPlayer {
  constructor(team, id, canvas, game) {
    this.ctx = canvas.getContext("2d");
    this.game = game;
    this.team = team;
    this.currentHand = [];
    this.id = id;
    this.addCard = this.addCard.bind(this);
    this.promptMove = this.promptMove.bind(this);
    this.renderThrow = this.renderThrow.bind(this);
    this.chooseBestCard = this.chooseBestCard.bind(this);
    this.briscAvailable = this.briscAvailable.bind(this);
    this.worstCardThrower = this.worstCardThrower.bind(this);
    this.modifyBriscPoints = this.modifyBriscPoints.bind(this);
    this.toCallBrisc = this.toCallBrisc.bind(this);
    this.decideBestCardIdxAlreadyThrown = this.decideBestCardIdxAlreadyThrown.bind(
      this
    );
    this.positions = {
      1: {
        rot: -90,
        one: -160,
        two: -230,
        three: -300,
        four: -370,
        five: -440,
        card1to5yPos: 902,
        thrownCardyPos: 700,
        throwCardxPos: -314,
      },
      2: {
        rot: 180,
        one: -410,
        two: -480,
        three: -550,
        four: -620,
        five: -690,
        card1to5yPos: -98,
        thrownCardyPos: -250,
        throwCardxPos: -564,
      },
      3: {
        rot: 90,
        one: 105,
        two: 175,
        three: 245,
        four: 315,
        five: 385,
        card1to5yPos: -98,
        thrownCardyPos: -300,
        throwCardxPos: 231,
      },
    };
    this.possibleBriscs = {
      DENARI: 0,
      SPADE: 0,
      COPPE: 0,
      BASTONI: 0,
    };

    this.pointsOfEachSuit = {
      DENARI: 0,
      SPADE: 0,
      COPPE: 0,
      BASTONI: 0,
    };
  }

  briscAvailable() {
    if (this.currentHand.length < 3) {
      this.possibleBriscs = {
        DENARI: 0,
        SPADE: 0,
        COPPE: 0,
        BASTONI: 0,
      };
      this.pointsOfEachSuit = {
        DENARI: 0,
        SPADE: 0,
        COPPE: 0,
        BASTONI: 0,
      };
      return;
    }
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
      firstCard.src = "src/public/images/card-back-rename.JPG";
    } else {
      firstCard.src = "src/public/images/no-card.png";
    }
    if (this.currentHand.length > 1 && num !== 1) {
      secondCard.src = "src/public/images/card-back-rename.JPG";
    } else {
      secondCard.src = "src/public/images/no-card.png";
    }
    if (this.currentHand.length > 2 && num !== 2) {
      thirdCard.src = "src/public/images/card-back-rename.JPG";
    } else {
      thirdCard.src = "src/public/images/no-card.png";
    }
    if (this.currentHand.length > 3 && num !== 3) {
      fourthCard.src = "src/public/images/card-back-rename.JPG";
    } else {
      fourthCard.src = "src/public/images/no-card.png";
    }
    if (this.currentHand.length > 4 && num !== 4) {
      fifthCard.src = "src/public/images/card-back-rename.JPG";
    } else {
      fifthCard.src = "src/public/images/no-card.png";
    }

    setTimeout(() => {
      this.ctx.save();
      this.ctx.rotate(pI.rot * (Math.PI / 180));
      this.ctx.drawImage(firstCard, pI.one, pI.card1to5yPos, 55, 98);
      this.ctx.drawImage(secondCard, pI.two, pI.card1to5yPos, 55, 98);
      this.ctx.drawImage(thirdCard, pI.three, pI.card1to5yPos, 55, 98);
      this.ctx.drawImage(fourthCard, pI.four, pI.card1to5yPos, 55, 98);
      this.ctx.drawImage(fifthCard, pI.five, pI.card1to5yPos, 55, 98);

      this.ctx.drawImage(
        throwCard,
        pI.throwCardxPos,
        pI.thrownCardyPos,
        81,
        144
      );
      this.ctx.restore();
    }, 500);
  }

  addCard(card) {
    if (this.currentHand.length < 5) {
      if (card.points === 3 || card.points === 4) {
        this.possibleBriscs[card.suit] += card.points;
      }

      this.pointsOfEachSuit[card.suit] += card.points;
      card.owner = this;
      card.faceUp = true;
      card.team = this.team;
      this.currentHand.push(card);
      console.log(this.pointsOfEachSuit);
    } else {
      console.log("cpu trying to draw again.  IDK WHY!");
      return;
    }
  }

  worstCardThrower() {
    let smallestIdx = 0;
    for (let i = 1; i < 5; i++) {
      let card = this.currentHand[i];

      if (card.rank < this.currentHand[smallestIdx].rank) {
        smallestIdx = i;
      }
    }

    return smallestIdx;
  }

  modifyBriscPoints(card) {
    if (
      card.points === 3 ||
      (card.points === 4 && this.possibleBriscs[card.suit] !== 0)
    ) {
      this.possibleBriscs[card.suit] -= card.points;
    }
  }

  toCallBrisc(suit) {
    this.game.callBrisc(suit, this);
    return;

    // let totalpoints = 0;

    // for (let i = 0; i < this.currentHand.length; i++) {
    //   let card = this.currentHand[i];
    //   if (card.suit === suit) {
    //     totalpoints += card.points;
    //   };
    // };

    // if (totalpoints > 7 && this.currentHand.length > 4) {
    //   this.game.callBrisc(suit, this)
    // } else if (totalpoints >= 7 && this.currentHand.length === 3) {
    //   this.game.callBrisc(suit, this)
    // };
  }

  chooseBestCard() {
    let toThrowIdx;
    let cardToThrow;

    if (this.game.currentDeck.cardsInDeck.length !== 0) {
      toThrowIdx = this.worstCardThrower();
      cardToThrow = this.currentHand[toThrowIdx];
    } else {
      toThrowIdx = Math.floor(Math.random() * this.currentHand.length);
      cardToThrow = this.currentHand[toThrowIdx];

      let points = ["DENARI", "SPADE", "COPPE", "BASTONI"];
      for (let i = 0; i < 4; i++) {
        let suit = points[i];
        if (this.possibleBriscs[suit] === 7) {
          this.toCallBrisc(suit);
        }
      }
    }

    this.modifyBriscPoints(cardToThrow);
    this.renderThrow(toThrowIdx);

    this.currentHand = this.currentHand
      .slice(0, toThrowIdx)
      .concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));

    this.game.thrownCards.push(cardToThrow);
  }

  promptMove() {
    this.briscAvailable();
    this.chooseBestCard();

    if (this.game.thrownCards.length === 4) {
      setTimeout(() => this.game.winningCardThrown(this.game), 2500);
    } else {
      this.game.nextThrow();
    }

    return;
  }

  decideBestCardIdxAlreadyThrown() {
    const currentThrown = this.game.thrownCards;
    const currentBriscola = this.game.currentBrisc;

    if (currentThrown.length === 0) {
      return -1;
    }

    let highestCard = currentThrown[0];
    let suitToBeat = currentThrown[0].suit;

      // winning card no brisc
      for (let i = 1; i < currentThrown.length; i++) {
        let thisThrown = currentThrown[i];
        if (
          thisThrown.rank > highestCard.rank &&
          thisThrown.suit === suitToBeat
        ) {
          highestCard = thisThrown;
        };
      };

      // winning card yes brisc
      if (currentBriscola !== 0) {
        suitToBeat = currentBriscola[0];

        for (let i = 0; i < currentThrown.length; i++) {
          let thisThrown = this.thrownCards[i];

          if (
            thisThrown.suit === suitToBeat &&
            highestCard.suit !== suitToBeat
          ) {
            highestCard = thisThrown;
          } else if (
            thisThrown.rank > highestCard.rank &&
            thisThrown.suit === suitToBeat &&
            highestCard.suit === suitToBeat
          ) {
            highestCard = thisThrown;
          };
        };
      };
    return highestCard
  };

};