class Team {
  constructor(p1, p2) {
    this.player1 = p1;
    this.player2 = p2;
    this.currentRoundScore = 0;
    this.totalGameScore = 0;
    this.cardsWon = [];
  }

  addTotalScore = () => {
    this.totalGameScore += this.currentRoundScore;
    this.currentRoundScore = 0;
  }

  clearCardsWon = () => {
    this.cardsWon = [];
  }
}

module.exports = Team;