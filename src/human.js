class HumanPlayer {
  constructor(team){
    this.team = team;
    this.currentHand = [];
  };

  addCard(card) {
    if (this.currentHand.length < 5) {
      this.currentHand.push(card);
    } else {
      throw "STOP CHEATING AT BRISC.  ONLY KEITH DOES THAT"
    }

  }


};

module.exports = HumanPlayer;