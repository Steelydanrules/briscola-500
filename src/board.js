// let Computer = require("./computer.js");
// let Human = require("./human.js");
// let Game = require("./game.js");
// // let Deck = require("./deck.js");

// let CURRENTDECK = Object.keys(Game.deck);

// PLAYERS = [
//   new Computer(),
//   new Computer(),
//   new Computer(),
//   new Human()
// ]



// _dealCards = () => {

//   PLAYERS.forEach(player => {
//     for (let i = 0; i < 5; i++) {
//       let nextCardIdx = Math.floor(Math.random() * CURRENTDECK.length);
//       let nextCard = CURRENTDECK[nextCardIdx];

//       drawCard(player, nextCard);

//       delete Game.deck.nextCard;
//       CURRENTDECK = Object.keys(Game.deck);
//     }
//   });
// }

// drawCard = (player, card) => {
//   player.addCard(card)
// }



// callBrisc = (suit) => {
//   if (Game.currentBrisc === null) {
//     Game.currentBrisc = suit;
//   } 
// }

