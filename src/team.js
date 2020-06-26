export default class Team {
  constructor(name) {
    this.currentRoundScore = 0;
    this.totalGameScore = 0;
    // this.cardsWon = [];
    this.name = name;
  }

  addTotalScore = () => {
    this.totalGameScore += this.currentRoundScore;
    this.currentRoundScore = 0;
    // this.cardsWon = [];
  };

  // addHandToWinningPile = (handArr) => {
  //   this.cardsWon.concat(handArr)
  // }
}
