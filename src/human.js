export default class HumanPlayer {
  constructor(team, xPos, yPos, rotAmt, canvas) {
    this.ctx = canvas.getContext("2d");
    this.team = team;
    this.currentHand = [];
    this.id = 0;
    this.toThrowIdx = null;
    this.xPos = xPos;
    this.yPos = yPos;
    this.rotAmt = rotAmt;
    this.turnNotOver = true;
    this.briscAvailable = this.briscAvailable.bind(this);
    this.addCard = this.addCard.bind(this);
    this.throwCard = this.throwCard.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.registerEventListeners = this.registerEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.promptMove = this.promptMove.bind(this);
    this.renderThrow = this.renderThrow.bind(this);
    this.registerEventListeners();
    this.amtHit = 0;
  }

  briscAvailable() {
    if (this.currentHand.length < 3) return;
    let possibleBriscs = { "DENARI": 0, "SPADE": 0, "COPPE": 0, "BASTONI": 0 };
    let actualBriscs = [];

    this.currentHand.forEach((card) => {
      if (card.points === 3 || card.points === 4) {
        possibleBriscs[card.suit] += 1;
      }
    });

    for (let suit in possibleBriscs) {
      if (possibleBriscs[suit] > 1) {
        actualBriscs.push(suit);
      }
    }

    return actualBriscs;
  };

  addCard(card) {
    if (this.currentHand.length < 5) {
      card.owner = this;
      card.faceUp = true;
      card.team = this.team;
      this.currentHand.push(card);
    } else {
      console.log("human trying to draw again.  IDK WHY")
      return
    }
  };

//   chooseCard() {
//   document.addEventListener("mousedown", (e) => {
//     console.log("event listener")
//     if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
//       return this.throwCard(0);
//     } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
//       return this.throwCard(1);
//     } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
//       return this.throwCard(2);
//     } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
//       return this.throwCard(3);
//     } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
//       return this.throwCard(4);
//     }
//   });
// }

    // let faceDown = new Image();
    // let noCard = new Image();
    // faceDown.src = "../images/card-back-rename.jpg";
    // noCard.src = "../images/no-card.png";

    //   this.ctx.drawImage(firstCard, 355, 620, 90, 160);
    //   this.ctx.drawImage(secondCard, 455, 620, 90, 160);
    //   this.ctx.drawImage(thirdCard, 555, 620, 90, 160);
    //   this.ctx.drawImage(fourthCard, 655, 620, 90, 160);
    //   this.ctx.drawImage(fifthCard, 755, 620, 90, 160);
    //   this.ctx.drawImage(noCard, 555, 440, 90, 160);

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
      console.log("startTurn")
      console.log(this.currentHand)

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

    return cardToThrow;
  }


  handleMouseDown(e) {
    e.preventDefault();
    // console.log("event listener")
    // console.log("x", e.pageX, "y", e.pageY)
    // console.log(e)
    // return
    if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 0) {
      console.log("0")
      this.renderThrow(0)
      this.removeEventListeners();
      return this.throwCard(0);
    } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 1) {
      console.log("1")
      this.renderThrow(1)
      this.removeEventListeners();
      return this.throwCard(1);
    } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 2) {
      console.log("2")
      this.renderThrow(2)
      this.removeEventListeners();
      return this.throwCard(2);
    } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 3) {
      console.log("3")
      this.renderThrow(3)
      this.removeEventListeners();
      return this.throwCard(3);
    } else if (e.pageX > 865 && e.pageX < 955 && e.pageY > 700 && e.pageY < 860 && this.currentHand.length > 4) {
      console.log("4")
      this.renderThrow(4)
      this.removeEventListeners();
      return this.throwCard(4);
    }
  }

  registerEventListeners() {
    document.addEventListener("mousedown", this.handleMouseDown);
  }
  
  removeEventListeners() {
    document.removeEventListener("mousedown", this.handleMouseDown);
  }

  promptMove(nextPlayer) {
    console.log("prompted")
    this.registerEventListeners();





  };


};
