class Team {
  constructor() {
    this.currentRoundScore = 0;
    this.totalGameScore = 0;
    this.cardsWon = [];
  }

  addTotalScore = () => {
    this.totalGameScore += this.currentRoundScore;
    this.currentRoundScore = 0;
    this.cardsWon = [];
  }

  addHandToWinningPile = (handArr) => {
    this.cardsWon.concat(handArr)
  }

}

module.exports = Team;