export default class ComputerPlayer {
  constructor(team, id, xPos, yPos, rotAmt, canvas, game) {
    this.ctx = canvas.getContext("2d");
    this.game = game
    this.team = team;
    this.currentHand = [];
    this.id = id;
    this.xPos = xPos;
    this.yPos = yPos;
    this.rotAmt = rotAmt;
    this.addCard = this.addCard.bind(this);
    this.promptMove = this.promptMove.bind(this);
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
    console.log("promped")
    console.log(this.currentHand)
    let toThrowIdx = Math.floor(Math.random() * this.currentHand * length);
    console.log(toThrowIdx)
    let cardToThrow = this.currentHand[toThrowIdx];
    console.log(cardToThrow)
    this.currentHand = this.currentHand
      .slice(0, toThrowIdx)
      .concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));

    return cardToThrow;
  };
};
