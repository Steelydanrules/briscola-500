import Deck from "./deck.js"

export default class ComputerPlayer {
  constructor(team, id) {
    this.team = team;
    this.currentHand = [];
    this.id = id;
  }

  addCard(card) {
    if (this.currentHand.length < 5) {
      card.owner = this;
      card.team = this.team;
      this.currentHand.push(card);
    } else {
      throw "STOP CHEATING AT BRISC.";
    }
  };

  promptMove() {
    debugger
    let toThrowIdx = 0;
    let cardToThrow = this.currentHand[toThrowIdx];
    this.currentHand = this.currentHand
      .slice(0, toThrowIdx)
      .concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));

    // console.log(cardToThrow)

    cardToThrow.faceUp = true;

    return cardToThrow;
  };
};
