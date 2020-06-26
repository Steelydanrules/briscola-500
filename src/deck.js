

export default class Deck {
  constructor() {
    // this.cardsInDeck = {
    //   "2DENARI" : { suit: DENARI, points: 0, rank: 1, faceUp: false, imageUrl: "./images/2Gold.png"},
    //   "4DENARI": { suit: DENARI, points: 0, rank: 2, faceUp: false, imageUrl: "./images/4Gold.png"},
    //   "5DENARI": { suit: DENARI, points: 0, rank: 3, faceUp: false, imageUrl: "./images/5Gold.png"},
    //   "6DENARI": { suit: DENARI, points: 0, rank: 4, faceUp: false, imageUrl: "./images/6Gold.png"},
    //   "7DENARI": { suit: DENARI, points: 0, rank: 5, faceUp: false, imageUrl: "./images/7Gold.png"},
    //   "JDENARI": { suit: DENARI, points: 2, rank: 6, faceUp: false, imageUrl: "./images/JGold.png"},
    //   "QDENARI": { suit: DENARI, points: 3, rank: 7, faceUp: false, imageUrl: "./images/QGold.png"},
    //   "KDENARI": { suit: DENARI, points: 4, rank: 8, faceUp: false, imageUrl: "./images/KGold.png"},
    //   "3DENARI": { suit: DENARI, points: 10, rank: 9, faceUp: false, imageUrl: "./images/3Gold.png"},
    //   "ADENARI": { suit: DENARI, points: 11, rank: 10, faceUp: false, imageUrl: "./images/AGold.png"},
    //   "2SPADE" : { suit: SPADE, points: 0, rank: 1, faceUp: false, imageUrl: "./images/2Swords.png"},
    //   "4SPADE": { suit: SPADE, points: 0, rank: 2, faceUp: false, imageUrl: "./images/4Swords.png"},
    //   "5SPADE": { suit: SPADE, points: 0, rank: 3, faceUp: false, imageUrl: "./images/5Swords.png"},
    //   "6SPADE": { suit: SPADE, points: 0, rank: 4, faceUp: false, imageUrl: "./images/6Swords.png"},
    //   "7SPADE": { suit: SPADE, points: 0, rank: 5, faceUp: false, imageUrl: "./images/7Swords.png"},
    //   "JSPADE": { suit: SPADE, points: 2, rank: 6, faceUp: false, imageUrl: "./images/JSwords.png"},
    //   "QSPADE": { suit: SPADE, points: 3, rank: 7, faceUp: false, imageUrl: "./images/QSwords.png"},
    //   "KSPADE": { suit: SPADE, points: 4, rank: 8, faceUp: false, imageUrl: "./images/KSwords.png"},
    //   "3SPADE": { suit: SPADE, points: 10, rank: 9, faceUp: false, imageUrl: "./images/3Swords.png"},
    //   "ASPADE": { suit: SPADE, points: 11, rank: 10, faceUp: false, imageUrl: "./images/ASwords.png"},
    //   "2COPPE" : { suit: COPPE, points: 0, rank: 1, faceUp: false, imageUrl: "./images/2Cups.png"},
    //   "4COPPE": { suit: COPPE, points: 0, rank: 2, faceUp: false, imageUrl: "./images/4Cups.png"},
    //   "5COPPE": { suit: COPPE, points: 0, rank: 3, faceUp: false, imageUrl: "./images/5Cups.png"},
    //   "6COPPE": { suit: COPPE, points: 0, rank: 4, faceUp: false, imageUrl: "./images/6Cups.png"},
    //   "7COPPE": { suit: COPPE, points: 0, rank: 5, faceUp: false, imageUrl: "./images/7Cups.png"},
    //   "JCOPPE": { suit: COPPE, points: 2, rank: 6, faceUp: false, imageUrl: "./images/JCups.png"},
    //   "QCOPPE": { suit: COPPE, points: 3, rank: 7, faceUp: false, imageUrl: "./images/QCups.png"},
    //   "KCOPPE": { suit: COPPE, points: 4, rank: 8, faceUp: false, imageUrl: "./images/KCups.png"},
    //   "3COPPE": { suit: COPPE, points: 10, rank: 9, faceUp: false, imageUrl: "./images/3Cups.png"},
    //   "ACOPPE": { suit: COPPE, points: 11, rank: 10, faceUp: false, imageUrl: "./images/ACups.png"},
    //   "2BASTONI" : { suit: BASTONI, points: 0, rank: 1, faceUp: false, imageUrl: "./images/2Bats.png"},
    //   "4BASTONI": { suit: BASTONI, points: 0, rank: 2, faceUp: false, imageUrl: "./images/4Bats.png"},
    //   "5BASTONI": { suit: BASTONI, points: 0, rank: 3, faceUp: false, imageUrl: "./images/5Bats.png"},
    //   "6BASTONI": { suit: BASTONI, points: 0, rank: 4, faceUp: false, imageUrl: "./images/6Bats.png"},
    //   "7BASTONI": { suit: BASTONI, points: 0, rank: 5, faceUp: false, imageUrl: "./images/7Bats.png"},
    //   "JBASTONI": { suit: BASTONI, points: 2, rank: 6, faceUp: false, imageUrl: "./images/JBats.png"},
    //   "QBASTONI": { suit: BASTONI, points: 3, rank: 7, faceUp: false, imageUrl: "./images/QBats.png"},
    //   "KBASTONI": { suit: BASTONI, points: 4, rank: 8, faceUp: false, imageUrl: "./images/KBats.png"},
    //   "3BASTONI": { suit: BASTONI, points: 10, rank: 9, faceUp: false, imageUrl: "./images/3Bats.png"},
    //   "ABASTONI": { suit: BASTONI, points: 11, rank: 10, faceUp: false, imageUrl: "./images/ABats.png"}
    // };

    // DENARI = "DENARI" //Gold
    // SPADE = "SPADE" //Sword
    // COPPE = "COPPE" //Cups
    // BASTONI = "BASTONI" //Bats

    this.cardsInDeck = [
      {
        suit: "DENARI",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "../images/2Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "../images/4Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "../images/5Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "../images/6Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "../images/7Gold.png",
      },
      {
        suit: "DENARI",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "../images/JGold.png",
      },
      {
        suit: "DENARI",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "../images/QGold.png",
      },
      {
        suit: "DENARI",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "../images/KGold.png",
      },
      {
        suit: "DENARI",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "../images/3Gold.png",
      },
      {
        suit: "DENARI",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "../images/AGold.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "../images/2Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "../images/4Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "../images/5Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "../images/6Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "../images/7Swords.png",
      },
      {
        suit: "SPADE",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "../images/JSwords.png",
      },
      {
        suit: "SPADE",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "../images/QSwords.png",
      },
      {
        suit: "SPADE",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "../images/KSwords.png",
      },
      {
        suit: "SPADE",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "../images/3Swords.png",
      },
      {
        suit: "SPADE",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "../images/ASwords.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "../images/2Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "../images/4Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "../images/5Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "../images/6Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "../images/7Cups.png",
      },
      {
        suit: "COPPE",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "../images/JCups.png",
      },
      {
        suit: "COPPE",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "../images/QCups.png",
      },
      {
        suit: "COPPE",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "../images/KCups.png",
      },
      {
        suit: "COPPE",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "../images/3Cups.png",
      },
      {
        suit: "COPPE",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "../images/ACups.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "../images/2Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "../images/4Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "../images/5Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "../images/6Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "../images/7Bats.png",
      },
      {
        suit: "BASTONI",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "../images/JBats.png",
      },
      {
        suit: "BASTONI",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "../images/QBats.png",
      },
      {
        suit: "BASTONI",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "../images/KBats.png",
      },
      {
        suit: "BASTONI",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "../images/3Bats.png",
      },
      {
        suit: "BASTONI",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "../images/ABats.png",
      },
    ];
  }

  imageUrl(card, imageUrl){

  };

  showCard(card){
    card.faceUp = true;
  };

  shuffleDeck(){
    this.cardsInDeck.forEach((card) => {
      card.faceUp = false;
      card.owner = null;
    });

    for (let i = 0; i < 1992; i++) {
      let card1 = Math.floor(Math.random() * this.cardsInDeck.length);
      let card2 = Math.floor(Math.random() * this.cardsInDeck.length);
      let tmp = this.cardsInDeck[card1];

      this.cardsInDeck[card1] = this.cardsInDeck[card2];
      this.cardsInDeck[card2] = tmp;
    }
  };

}
