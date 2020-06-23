class HumanPlayer {
  constructor(team){
    this.team = team;
    this.currentHand = [];
  };

  briscAvailable = () => {


  }

  addCard = (card) => {
    if (this.currentHand.length < 5) {
      card.showCard();
      this.currentHand.push(card);
    } else {
      throw "STOP CHEATING AT BRISC, KETIH."
    }
  }

  promptMove = () => {
    console.log("Which index card shall we throw?");
    let toThrowIdx = readline();
    let cardToThrow = this.currentHand[toThrowIdx];
    //deletes card from hand
    this.currentHand = this.currentHand.slice(0, toThrowIdx).concat(toThrowIdx + 1, this.currentHand.length);

    cardToThrow.showCard();

    return cardToThrow;
  }




};

module.exports = HumanPlayer;