let Deck = require("./deck.js");
const readline = require("readline");

class HumanPlayer {
  constructor(team){
    this.team = team;
    this.currentHand = [];
    this.id = 0;
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
      card.owner = this;
      card.faceUp = true;
      card.team = this.team;
      this.currentHand.push(card);
    } else {
      throw "STOP CHEATING AT BRISC, KETIH."
    }
  }


  // askforMove = () => {


  // }

  promptMove = () => {

    // const reader = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // });

    // console.log(this.currentHand)

    // reader.question("which index will be throwing???????", (toThrowIdx) => {

    console.log(this.briscAvailable());

    this.currentHand.forEach(card => {
      console.log(card.suit)
    });

      // let toThrowIdx = this.askforMove();
    let toThrowIdx = 0;

    let cardToThrow = this.currentHand[toThrowIdx];
    this.currentHand = this.currentHand.slice(0, toThrowIdx).concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));

    cardToThrow.faceUp = true;

    return cardToThrow;
    // });

  }




};

module.exports = HumanPlayer;