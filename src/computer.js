class ComputerPlayer {
  constructor(team) {
    this.team = team;
    this.currentHand = [];
  };

  addCard = (card) => {
    if (this.currentHand.length < 5) {
      this.currentHand.push(card);
    } else {
      throw "STOP CHEATING AT BRISC, KETIH."
    }
  }

  promptMove = () => {
    let toThrowIdx = Math.floor(Math.random() * this.currentHand.length);
    let cardToThrow = this.currentHand[toThrowIdx];
    //deletes card from hand
    this.currentHand = this.currentHand.slice(0, toThrowIdx).concat(toThrowIdx + 1, this.currentHand.length);

    cardToThrow.showCard();

    return cardToThrow;
  }

};

module.exports = ComputerPlayer;