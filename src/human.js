class HumanPlayer {
  constructor(team){
    this.team = team;
    this.currentHand = [];
  };

  briscAvailable = () => {
    if (this.currentHand.length < 3) return;
    let possibleBriscs = {DENARI: 0, SPADE: 0, COPPE: 0, BASTONI: 0};
    let actualBriscs = [];

    this.currentHand.forEach(card => {
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
    console.log(this.briscAvailable());
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