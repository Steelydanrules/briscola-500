export default class HumanPlayer {
  constructor(team, xPos, yPos, rotAmt) {
    this.team = team;
    this.currentHand = [];
    this.id = 0;
    this.toThrowIdx = null;
    this.xPos = xPos;
    this.yPos = yPos;
    this.rotAmt = rotAmt;
    this.turnNotOver = true;
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

  throwCard(selectedIdx) {

    let cardToThrow = this.currentHand[selectedIdx];
    this.currentHand = this.currentHand
      .slice(0, selectedIdx)
      .concat(this.currentHand.slice(selectedIdx + 1, this.currentHand.length));

    // if (cardToThrow === undefined) return
    return cardToThrow;
  }

  handleMouseDown(e) {
    console.log("event listener")
    if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
      this.turnNotOver = false;
      return this.throwCard(0);
    } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
      this.turnNotOver = false;
      return this.throwCard(1);
    } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
      this.turnNotOver = false;
      return this.throwCard(2);
    } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
      this.turnNotOver = false;
      return this.throwCard(3);
    } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
      this.turnNotOver = false;
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
    console.log("prompted")
    this.registerEventListeners();
    this.amtHit += 1;

    if (this.amtHit > 1000) {
      this.turnNotOver = false;
    }

    if (this.turnNotOver) {
      console.log("hit the if statement!", this.amtHit)
      setTimeout(this.promptMove, 1000);
      this.promptMove();
    }

    this.removeEventListeners();
  };


};
