class ComputerPlayer {
  constructor(team) {
    this.team = team;
    this.currentHand = [];
  };

  addCard = (card) => {
    if (this.currentHand.length < 5) {
      this.currentHand.push(card);
    } else {
      throw "STOP CHEATING AT BRISC."
    }
  }

  promptMove = () => {
    return Math.floor(Math.random() * this.currentHand.length) 
  }

};

module.exports = ComputerPlayer;