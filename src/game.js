let Computer = require("./computer.js");
let Human = require("./human.js");
let Deck = require("./deck.js");
let Team = require("./team.js");


class Game {
  constructor() {
    const currentBrisc = null;
    const currentDeck = new Deck();
    Deck.shuffleDeck(currentDeck);
    
    PLAYERS = [
      new Computer(),
      new Computer(),
      new Computer(),
      new Human(name)
    ];

    const humanTeam = new Team(PLAYERS[1], PLAYERS[3]);
    const robotTeam = new Team(PLAYERS[0], PLAYERS[2]);
  };

  _dealCards = () => {

    for (let i = 0; i < 5; i++) {

    PLAYERS.forEach(player => {
      let cardToDraw = currentDeck.pop();
      player.currentHand.push(cardToDraw);
      }
    )};
  };
  
  drawCard = (player, card) => {
    player.addCard(card)
  }



callBrisc = (suit, player) => {
  if (Game.currentBrisc === null) {
    Game.currentBrisc = suit;
    player.team.roundScore += 40
  }
}












}

module.exports = Game;