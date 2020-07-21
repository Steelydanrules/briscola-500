

export default class Deck {
  constructor() {
    this.cardsInDeck = [
      {
        suit: "DENARI",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/2Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/4Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/5Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/6Gold.png",
      },
      {
        suit: "DENARI",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/7Gold.png",
      },
      {
        suit: "DENARI",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/JGold.png",
      },
      {
        suit: "DENARI",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/QGold.png",
      },
      {
        suit: "DENARI",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/KGold.png",
      },
      {
        suit: "DENARI",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/3Gold.png",
      },
      {
        suit: "DENARI",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/AGold.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/2Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/4Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/5Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/6Swords.png",
      },
      {
        suit: "SPADE",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/7Swords.png",
      },
      {
        suit: "SPADE",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/JSwords.png",
      },
      {
        suit: "SPADE",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/QSwords.png",
      },
      {
        suit: "SPADE",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/KSwords.png",
      },
      {
        suit: "SPADE",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/3Swords.png",
      },
      {
        suit: "SPADE",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/ASwords.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/2Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/4Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/5Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/6Cups.png",
      },
      {
        suit: "COPPE",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/7Cups.png",
      },
      {
        suit: "COPPE",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/JCups.png",
      },
      {
        suit: "COPPE",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/QCups.png",
      },
      {
        suit: "COPPE",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/KCups.png",
      },
      {
        suit: "COPPE",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/3Cups.png",
      },
      {
        suit: "COPPE",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/ACups.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 1,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/2Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 2,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/4Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 3,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/5Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 4,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/6Bats.png",
      },
      {
        suit: "BASTONI",
        points: 0,
        rank: 5,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/7Bats.png",
      },
      {
        suit: "BASTONI",
        points: 2,
        rank: 6,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/JBats.png",
      },
      {
        suit: "BASTONI",
        points: 3,
        rank: 7,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/QBats.png",
      },
      {
        suit: "BASTONI",
        points: 4,
        rank: 8,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/KBats.png",
      },
      {
        suit: "BASTONI",
        points: 10,
        rank: 9,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/3Bats.png",
      },
      {
        suit: "BASTONI",
        points: 11,
        rank: 10,
        faceUp: false,
        owner: null,
        imageUrl: "./src/public/images/ABats.png",
      },
    ];

    this.showCard = this.showCard.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
  }


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
