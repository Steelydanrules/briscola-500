export default class Team {
  constructor(name) {
    this.currentRoundScore = 0;
    this.totalGameScore = 0;
    this.name = name;
    this.addTotalScore = this.addTotalScore.bind(this);

  }

  addTotalScore() {
    this.totalGameScore += this.currentRoundScore;
    this.currentRoundScore = 0;
  };
}
