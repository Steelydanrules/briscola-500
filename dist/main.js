/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComputerPlayer; });\nclass ComputerPlayer {\n  constructor(team, id, xPos, yPos, rotAmt) {\n    this.team = team;\n    this.currentHand = [];\n    this.id = id;\n    this.xPos = xPos;\n    this.yPos = yPos;\n    this.rotAmt = rotAmt;\n\n  }\n\n  addCard(card) {\n    if (this.currentHand.length < 5) {\n      card.owner = this;\n      card.team = this.team;\n      this.currentHand.push(card);\n    } else {\n      console.log(\"cpu trying to draw again.  IDK WHY\")\n      return\n    }\n  };\n\n  promptMove() {\n    debugger\n    let toThrowIdx = 0;\n    let cardToThrow = this.currentHand[toThrowIdx];\n    this.currentHand = this.currentHand\n      .slice(0, toThrowIdx)\n      .concat(this.currentHand.slice(toThrowIdx + 1, this.currentHand.length));\n\n    // console.log(cardToThrow)\n\n    cardToThrow.faceUp = true;\n\n    return cardToThrow;\n  };\n};\n\n\n//# sourceURL=webpack:///./src/computer.js?");

/***/ }),

/***/ "./src/deck.js":
/*!*********************!*\
  !*** ./src/deck.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Deck; });\n\n\nclass Deck {\n  constructor() {\n    this.cardsInDeck = [\n      {\n        suit: \"DENARI\",\n        points: 0,\n        rank: 1,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/2Gold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 0,\n        rank: 2,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/4Gold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 0,\n        rank: 3,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/5Gold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 0,\n        rank: 4,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/6Gold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 0,\n        rank: 5,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/7Gold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 2,\n        rank: 6,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/JGold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 3,\n        rank: 7,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/QGold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 4,\n        rank: 8,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/KGold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 10,\n        rank: 9,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/3Gold.png\",\n      },\n      {\n        suit: \"DENARI\",\n        points: 11,\n        rank: 10,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/AGold.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 0,\n        rank: 1,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/2Swords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 0,\n        rank: 2,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/4Swords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 0,\n        rank: 3,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/5Swords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 0,\n        rank: 4,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/6Swords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 0,\n        rank: 5,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/7Swords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 2,\n        rank: 6,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/JSwords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 3,\n        rank: 7,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/QSwords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 4,\n        rank: 8,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/KSwords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 10,\n        rank: 9,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/3Swords.png\",\n      },\n      {\n        suit: \"SPADE\",\n        points: 11,\n        rank: 10,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/ASwords.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 0,\n        rank: 1,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/2Cups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 0,\n        rank: 2,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/4Cups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 0,\n        rank: 3,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/5Cups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 0,\n        rank: 4,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/6Cups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 0,\n        rank: 5,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/7Cups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 2,\n        rank: 6,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/JCups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 3,\n        rank: 7,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/QCups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 4,\n        rank: 8,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/KCups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 10,\n        rank: 9,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/3Cups.png\",\n      },\n      {\n        suit: \"COPPE\",\n        points: 11,\n        rank: 10,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/ACups.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 0,\n        rank: 1,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/2Bats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 0,\n        rank: 2,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/4Bats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 0,\n        rank: 3,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/5Bats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 0,\n        rank: 4,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/6Bats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 0,\n        rank: 5,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/7Bats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 2,\n        rank: 6,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/JBats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 3,\n        rank: 7,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/QBats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 4,\n        rank: 8,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/KBats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 10,\n        rank: 9,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/3Bats.png\",\n      },\n      {\n        suit: \"BASTONI\",\n        points: 11,\n        rank: 10,\n        faceUp: false,\n        owner: null,\n        imageUrl: \"../images/ABats.png\",\n      },\n    ];\n  }\n\n\n  showCard(card){\n    card.faceUp = true;\n  };\n\n  shuffleDeck(){\n    this.cardsInDeck.forEach((card) => {\n      card.faceUp = false;\n      card.owner = null;\n    });\n\n    for (let i = 0; i < 1992; i++) {\n      let card1 = Math.floor(Math.random() * this.cardsInDeck.length);\n      let card2 = Math.floor(Math.random() * this.cardsInDeck.length);\n      let tmp = this.cardsInDeck[card1];\n\n      this.cardsInDeck[card1] = this.cardsInDeck[card2];\n      this.cardsInDeck[card2] = tmp;\n    }\n  };\n\n}\n\n\n//# sourceURL=webpack:///./src/deck.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer.js */ \"./src/computer.js\");\n/* harmony import */ var _human_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./human.js */ \"./src/human.js\");\n/* harmony import */ var _deck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deck.js */ \"./src/deck.js\");\n/* harmony import */ var _team_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.js */ \"./src/team.js\");\n\n\n\n\n\nclass Game {\n  constructor(canvas) {\n    this.currentBrisc = null;\n    this.currentDeck = new _deck_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.startingPlayerIndex = 1;\n    this.startOfRoundMove = this.startingPlayerIndex;\n    this.thrownCards = [];\n    this.ctx = canvas.getContext(\"2d\");\n    this.humanTeam = new _team_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"humanTeam\");\n    this.robotTeam = new _team_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"robotTeam\");\n\n    this.PLAYERS = [\n      new _human_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.humanTeam, 555, 440, 0),\n      new _computer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.robotTeam, 1, 305, -380, 90),\n      new _computer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.humanTeam, 2, -645, -260, 180),\n      new _computer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.robotTeam, 3, 555, 440, 0),\n    ];\n\n    debugger\n    console.log(\"game init\")\n  };\n\n  drawInitialBoard() {\n  let faceDown = new Image();\n  let noCard = new Image();\n  faceDown.src = \"../images/card-back-rename.jpg\";\n  noCard.src = \"../images/no-card.png\";\n\n    faceDown.onload = () => {\n      console.log(\"drawint\")\n      this.ctx.save();\n      this.ctx.rotate(-90 * (Math.PI / 180));\n\n      // right comp\n      this.ctx.drawImage(faceDown, -195, 1040, 90, 160);    \n      this.ctx.drawImage(faceDown, -295, 1040, 90, 160);\n      this.ctx.drawImage(faceDown, -395, 1040, 90, 160);\n      this.ctx.drawImage(faceDown, -495, 1040, 90, 160);\n      this.ctx.drawImage(faceDown, -595, 1040, 90, 160);\n      this.ctx.drawImage(noCard, -395, 820, 90, 160);\n\n      // deck\n      this.ctx.drawImage(faceDown, -395, 520, 90, 160);\n\n      this.ctx.restore();\n      this.ctx.save();\n      this.ctx.rotate(90 * (Math.PI / 180));\n\n      //left cpu\n      this.ctx.drawImage(faceDown, 105, -160, 90, 160);\n      this.ctx.drawImage(faceDown, 205, -160, 90, 160);\n      this.ctx.drawImage(faceDown, 305, -160, 90, 160);\n      this.ctx.drawImage(faceDown, 405, -160, 90, 160);\n      this.ctx.drawImage(faceDown, 505, -160, 90, 160);\n      this.ctx.drawImage(noCard, 305, -380, 90, 160);\n    \n      this.ctx.restore();\n      this.ctx.save();\n      this.ctx.rotate(180 * (Math.PI / 180));\n\n      //partner\n      this.ctx.drawImage(faceDown, -445, -80, 90, 160);\n      this.ctx.drawImage(faceDown, -545, -80, 90, 160);\n      this.ctx.drawImage(faceDown, -645, -80, 90, 160);\n      this.ctx.drawImage(faceDown, -745, -80, 90, 160);\n      this.ctx.drawImage(faceDown, -845, -80, 90, 160);\n      this.ctx.drawImage(noCard, -645, -260, 90, 160);\n  \n      this.ctx.restore();\n\n      this.ctx.drawImage(faceDown, 355, 620, 90, 160);\n      this.ctx.drawImage(faceDown, 455, 620, 90, 160);\n      this.ctx.drawImage(faceDown, 555, 620, 90, 160);\n      this.ctx.drawImage(faceDown, 655, 620, 90, 160);\n      this.ctx.drawImage(faceDown, 755, 620, 90, 160);\n      this.ctx.drawImage(noCard, 555, 440, 90, 160);\n    }\n  };\n\n  _dealCards() {\n    debugger\n    if (this.PLAYERS[0].currentHand.length !== 0) return\n\n    for (let i = 0; i < 5; i++) {\n\n    this.PLAYERS.forEach(player => {\n        let cardToDraw = this.currentDeck.cardsInDeck.pop();\n        player.currentHand.push(cardToDraw);\n        cardToDraw.owner = player;\n      }\n    )};\n  };\n  \n  callBrisc(suit, player) {\n    debugger\n    if (this.currentBrisc === null) {\n      this.currentBrisc = [suit];\n      player.team.roundScore += 40;\n    } else if (this.currentBrisc.indexOf(suit) === -1) {\n      this.currentBrisc.push(suit);\n      player.team.roundScore += 20;\n    }\n  };\n  \n  drawCard(player, card) {\n    debugger\n    player.addCard(card)\n  }\n\n  thisRoundIsntOver() {\n    debugger\n    if (this.PLAYERS[0].currentHand.length !== 0) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  addCardsValue(team, cards) {\n    debugger\n    let currentRoundTally = 0;\n    cards.forEach(card => {\n      currentRoundTally += card.points\n    });\n\n    team.currentRoundScore += currentRoundTally;\n  }\n\n  finalTally() {\n    debugger\n    this.humanTeam.addTotalScore();\n    this.robotTeam.addTotalScore();\n  }\n\n  playRound() {\n    debugger\n    this.currentBrisc = null;\n    this.currentDeck = new _deck_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.currentDeck.shuffleDeck();\n    this._dealCards();\n    // this.drawBoard();\n\n\n    while (this.thisRoundIsntOver()) {    \n    this.playHand();\n    }\n  }\n\n  winningCardThrown() {\n    debugger\n    console.log(this.thrownCards)\n    if (this.thrownCards.length !== 4) return;\n    // if (this.thrownCards.indexOf(undefined) !== -1) return;\n\n    let suitToBeat;\n    let highestCard;\n\n    if (this.currentBrisc) {\n      suitToBeat = this.currentBrisc;\n    } else {\n      suitToBeat = this.thrownCards[0].suit\n    };\n\n    for (let i = 0; i < 4; i++) {\n      if (this.thrownCards[i].suit === suitToBeat && \n        highestCard === undefined\n        || this.thrownCards[i].rank > highestCard.rank) {\n        highestCard = this.thrownCards[i];\n      }\n    }\n\n    if (new String(highestCard.owner.team.name) == \"humanTeam\") {\n      this.addCardsValue(this.humanTeam, this.thrownCards)\n    } else {\n      this.addCardsValue(this.robotTeam, this.thrownCards)\n    }\n\n    this.startOfRoundMove = this.PLAYERS.indexOf(highestCard.owner);\n    this.thrownCards = [];\n  }\n\n  promptTurn(user, numberOfCards) {\n    if (this.thrownCards.length === numberOfCards) {\n      this.playMove(user);\n    } \n  }\n\n  renderThisUsersThrow(card, user) {\n    let cardFace = new Image();\n    cardFace.src = card.imageUrl;\n    cardFace.onload = () => {\n      this.ctx.save();\n      this.ctx.rotate(user.rotAmt * (Math.PI / 180));\n      this.ctx.drawImage(cardFace, user.xPos, user.yPos, 90, 160);\n      this.ctx.restore();\n    }\n  }\n\n  playMove(user) {\n    debugger\n    let cardToThrow = user.promptMove();\n    this.thrownCards.push(cardToThrow);\n    this.renderThisUsersThrow(user);\n  }\n\n  playHand() {\n    debugger    \n    let firstToThrow = this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)];\n    let secondToThrow = this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)];\n    let thirdToThrow = this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)];\n    let lastToThrow = this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)];\n    \n    firstToThrow.promptMove();\n    secondToThrow.promptMove();\n    thirdToThrow.promptMove();\n    lastToThrow.promptMove();\n\n\n\n    this.winningCardThrown();\n\n    if (this.currentDeck.cardsInDeck.length !== 0) {\n    let firstToDraw = this.PLAYERS[((this.startOfRoundMove + 0) % this.PLAYERS.length)];\n    let secondToDraw = this.PLAYERS[((this.startOfRoundMove + 1) % this.PLAYERS.length)];\n    let thirdToDraw = this.PLAYERS[((this.startOfRoundMove + 2) % this.PLAYERS.length)];\n    let lastToDraw = this.PLAYERS[((this.startOfRoundMove + 3) % this.PLAYERS.length)];\n\n    firstToDraw.addCard(this.currentDeck.cardsInDeck.pop());\n    secondToDraw.addCard(this.currentDeck.cardsInDeck.pop());\n    thirdToDraw.addCard(this.currentDeck.cardsInDeck.pop());\n    lastToDraw.addCard(this.currentDeck.cardsInDeck.pop());\n    }\n  }\n\n  hasAnybodyWon() {\n    debugger\n    if (\n      this.humanTeam.totalGameScore >= 500 &&\n      this.robotTeam.totalGameScore >= 500 &&\n      this.robotTeam.totalGameScore > this.humanTeam.totalGameScore\n    ) {\n      return true;\n    } else if (\n      this.humanTeam.totalGameScore >= 500 &&\n      this.robotTeam.totalGameScore >= 500 &&\n      this.robotTeam.totalGameScore <= this.humanTeam.totalGameScore\n      ) {\n      return true;\n    } else if (this.humanTeam.totalGameScore >= 500) {\n      return true;\n    } else if (this.robotTeam.totalGameScore >= 500) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  playGame() {\n    debugger\n\n    console.log(\"playgame\")\n    debugger\n      while (!this.hasAnybodyWon()) {\n        this.playRound();\n        this.finalTally();\n        this.startingPlayerIndex += 1;\n        this.startOfRoundMove = (this.startingPlayerIndex + 1) % this.PLAYERS.length;\n      } \n\n  \n      console.log(\"game Over\")\n      console.log(this.humanTeam.totalGameScore)\n      console.log(this.robotTeam.totalGameScore)\n\n      return\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/human.js":
/*!**********************!*\
  !*** ./src/human.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HumanPlayer; });\nclass HumanPlayer {\n  constructor(team, xPos, yPos, rotAmt) {\n    this.team = team;\n    this.currentHand = [];\n    this.id = 0;\n    this.toThrowIdx = null;\n    this.xPos = xPos;\n    this.yPos = yPos;\n    this.rotAmt = rotAmt;\n\n  }\n\n  briscAvailable() {\n    if (this.currentHand.length < 3) return;\n    let possibleBriscs = { \"DENARI\": 0, \"SPADE\": 0, \"COPPE\": 0, \"BASTONI\": 0 };\n    let actualBriscs = [];\n\n    this.currentHand.forEach((card) => {\n      if (card.points === 3 || card.points === 4) {\n        possibleBriscs[card.suit] += 1;\n      }\n    });\n\n    for (let suit in possibleBriscs) {\n      if (possibleBriscs[suit] > 1) {\n        actualBriscs.push(suit);\n      }\n    }\n\n    return actualBriscs;\n  };\n\n  addCard(card) {\n    if (this.currentHand.length < 5) {\n      card.owner = this;\n      card.faceUp = true;\n      card.team = this.team;\n      this.currentHand.push(card);\n    } else {\n      console.log(\"human trying to draw again.  IDK WHY\")\n      return\n    }\n  };\n\n  chooseCard() {\n  document.addEventListener(\"mousedown\", (e) => {\n    if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {\n      return this.throwCard(0);\n    } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {\n      return this.throwCard(1);\n    } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {\n      return this.throwCard(2);\n    } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {\n      return this.throwCard(3);\n    } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {\n      return this.throwCard(4);\n    }\n  });\n}\n\n  throwCard(selectedIdx) {\n\n    let cardToThrow = this.currentHand[selectedIdx];\n    this.currentHand = this.currentHand\n      .slice(0, selectedIdx)\n      .concat(this.currentHand.slice(selectedIdx + 1, this.currentHand.length));\n\n    // if (cardToThrow === undefined) return\n    return cardToThrow;\n  }\n\n  promptMove() {\n    let turnNotOver = true;\n\n    while (turnNotOver) {\n      setTimeout(this.promptMove, 1000);\n    }\n\n    document.addEventListener(\"mousedown\", (e) => {\n      if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {\n        turnNotOver = false;\n        return this.throwCard(0);\n      } else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {\n        turnNotOver = false;\n        return this.throwCard(1);\n      } else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {\n        turnNotOver = false;\n        return this.throwCard(2);\n      } else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {\n        turnNotOver = false;\n        return this.throwCard(3);\n      } else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {\n        turnNotOver = false;\n        return this.throwCard(4);\n      }\n    });\n  };\n\n\n};\n\n\n//# sourceURL=webpack:///./src/human.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas-game\");\n  let currentGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n  debugger\n  currentGame.drawInitialBoard();\n  currentGame.playGame();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/team.js":
/*!*********************!*\
  !*** ./src/team.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Team; });\nclass Team {\n  constructor(name) {\n    this.currentRoundScore = 0;\n    this.totalGameScore = 0;\n    this.name = name;\n  }\n\n  addTotalScore() {\n    this.totalGameScore += this.currentRoundScore;\n    this.currentRoundScore = 0;\n  };\n}\n\n\n//# sourceURL=webpack:///./src/team.js?");

/***/ })

/******/ });