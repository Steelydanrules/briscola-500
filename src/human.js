import Deck from "./deck.js";

export default class HumanPlayer {
  constructor(team) {
    this.team = team;
    this.currentHand = [];
    this.id = 0;
    this.toThrowIdx = null;
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

  chooseCard() {
  document.addEventListener("mousedown", (e) => {
    if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
      return this.throwCard(0);
    } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
      return this.throwCard(1);
    } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
      return this.throwCard(2);
    } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
      return this.throwCard(3);
    } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
      return this.throwCard(4);
    }
  });
}

  throwCard(selectedIdx) {

    let cardToThrow = this.currentHand[selectedIdx];
    this.currentHand = this.currentHand
      .slice(0, selectedIdx)
      .concat(this.currentHand.slice(selectedIdx + 1, this.currentHand.length));

    if (cardToThrow === undefined) {
      return
    } else {
      cardToThrow.faceUp = true;
    }
    return cardToThrow;
  }

  promptMove() {

    // return this.throwCard(0)

    return document.addEventListener("mousedown", (e) => {
      if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
        return this.throwCard(0);
      } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
        return this.throwCard(1);
      } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
        return this.throwCard(2);
      } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
        return this.throwCard(3);
      } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
        return this.throwCard(4);
      }
    });
    

    // let cardToThrow = this.currentHand[this.toThrowIdx];
    // this.currentHand = this.currentHand
    //   .slice(0, this.toThrowIdx)
    //   .concat(this.currentHand.slice(this.toThrowIdx + 1, this.currentHand.length));

    // this.toThrowIdx = null;

    // if (cardToThrow === undefined) {
    //   return
    // } else {
    //   cardToThrow.faceUp = true;
    // }
    // return cardToThrow;
  };



};



// document.addEventListener("mousedown", (e) => {
//   if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
//     this.toThrowIdx = 0;
//     return 0;
//   } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
//     this.toThrowIdx = 1;
//     return 1;
//   } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
//     this.toThrowIdx = 2;
//     return 2;
//   } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
//     this.toThrowIdx = 3;
//     return 3;
//   } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
//     this.toThrowIdx = 4;
//     return 4;
//   }
// });