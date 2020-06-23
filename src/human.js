class HumanPlayer {
  constructor(team){
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
    console.log("Which index card shall we throw?");
    let toThrowIdx = readline();
    let cardToThrow = this.currentHand[toThrowIdx];
    
    
    return cardToThrow;
  }




};

module.exports = HumanPlayer;