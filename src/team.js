class Team {
  constructor(p1, p2) {
    const player1 = p1;
    const player2 = p2;
    const currentRoundScore = 0;
    const totalGameScore = 0;
  }

  _addTotalScore() {
    this.totalGameScore += this.currentRoundScore;
    this.currentRoundScore = 0;
  }
}

module.exports = Team;