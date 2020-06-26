import Deck from "./deck.js";

export default class HumanPlayer {
  constructor(team) {
    this.team = team;
    this.currentHand = [];
    this.id = 0;
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
      throw "STOP CHEATING AT BRISC, KETIH.";
    }
  };

  promptMove() {
    let toThrowIdx

    toThrowIdx = document.addEventListener("mousedown", (e) => {
      if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
        return 1;
      } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
        return 2;
      } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
        return 3;
      } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
        return 4;
      } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
        return 5;
      }
    });

    let cardToThrow = this.currentHand[toThrowIdx];
    this.currentHand = this.currentHand
      .slice(0, toThrowIdx)
      .concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));

    cardToThrow.faceUp = true;

    return cardToThrow;
    // });
  };
};
