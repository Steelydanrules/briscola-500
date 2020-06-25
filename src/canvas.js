let Game = require("./game.js");
let currentGame = new Game();
setTimeout(() => currentGame.playGame(), 1000);




const canvas = document.querySelector("canvas");

canvas.width = 1200;
canvas.height = 780;

const c = canvas.getContext('2d');

//card placements:

// //left cpu
// c.fillRect(0, 105, 160, 90);
// c.fillRect(0, 205, 160, 90);
// c.fillRect(0, 305, 160, 90);
// c.fillRect(0, 405, 160, 90);
// c.fillRect(0, 505, 160, 90);

// c.fillRect(220, 305, 160, 90);

// //right cpu
// c.fillRect(1040, 105, 160, 90);
// c.fillRect(1040, 205, 160, 90);
// c.fillRect(1040, 305, 160, 90);
// c.fillRect(1040, 405, 160, 90);
// c.fillRect(1040, 505, 160, 90);

// c.fillRect(820, 305, 160, 90);

// //cpu teammate
// c.fillRect(355, 0, 90, 80);
// c.fillRect(455, 0, 90, 80);
// c.fillRect(555, 0, 90, 80);
// c.fillRect(655, 0, 90, 80);
// c.fillRect(755, 0, 90, 80);

// c.fillRect(555, 100, 90, 160);

// //player
// c.fillRect(355, 620, 90, 160);
// c.fillRect(455, 620, 90, 160);
// c.fillRect(555, 620, 90, 160);
// c.fillRect(655, 620, 90, 160);
// c.fillRect(755, 620, 90, 160);

// c.fillRect(555, 440, 90, 160);

make_base();



function make_base() {
  base_image = new Image();
  base_image.src = "../images/card-back-rename.jpg";
  base_image.onload = function () {

    c.save();
    c.rotate(-90 * (Math.PI / 180));
    //right cpu and deck
    c.drawImage(base_image, -195, 1040, 90, 160);
    c.drawImage(base_image, -295, 1040, 90, 160);
    c.drawImage(base_image, -395, 1040, 90, 160);
    c.drawImage(base_image, -495, 1040, 90, 160);
    c.drawImage(base_image, -595, 1040, 90, 160);

    if (currentGame.thrownCards.length === 1) {
    c.drawImage(base_image, -395, 820, 90, 160);
    }
    //deck
    if (currentGame.currentDeck.cardsInDeck.length) {
    c.drawImage(base_image, -395, 520, 90, 160);
    }
    c.restore();

    c.save();

    c.rotate(90 * (Math.PI / 180));
    //left cpu
      c.drawImage(base_image, 105, -160, 90, 160);
      c.drawImage(base_image, 205, -160, 90, 160);
      c.drawImage(base_image, 305, -160, 90, 160);
      c.drawImage(base_image, 405, -160, 90, 160);
      c.drawImage(base_image, 505, -160, 90, 160);

      c.drawImage(base_image, 305, -380, 90, 160);
    c.restore();

    c.save();

    c.rotate(180 * (Math.PI / 180));
    //partner
      c.drawImage(base_image, -445, -80, 90, 160);
      c.drawImage(base_image, -545, -80, 90, 160);
      c.drawImage(base_image, -645, -80, 90, 160);
      c.drawImage(base_image, -745, -80, 90, 160);
      c.drawImage(base_image, -845, -80, 90, 160);

      c.drawImage(base_image, -645, -260, 90, 160);
    c.restore();

    c.drawImage(base_image,355, 620, 90, 160);
    c.drawImage(base_image,455, 620, 90, 160);
    c.drawImage(base_image,555, 620, 90, 160);
    c.drawImage(base_image,655, 620, 90, 160);
    c.drawImage(base_image,755, 620, 90, 160);

    c.drawImage(base_image,555, 440, 90, 160);


  };
}

document.addEventListener("mousedown", (e) => {
if (e.pageX > 365 && e.pageX < 455 && e.pageY > 700 && e.pageY < 860) {
  console.log("card1");
} else if (e.pageX > 465 && e.pageX < 555 && e.pageY > 700 && e.pageY < 860) {
  console.log("card2");
} else if (e.pageX > 565 && e.pageX < 655 && e.pageY > 700 && e.pageY < 860) {
  console.log("card3");
} else if (e.pageX > 665 && e.pageX < 755 && e.pageY > 700 && e.pageY < 860) {
  console.log("card4");
} else if (e.pageX > 765 && e.pageX < 855 && e.pageY > 700 && e.pageY < 860) {
  console.log("card5");
}
});







// c.fillRect(520, 305, 160, 90);
// c.drawImage(520, 305, 160, 90);


// 1: 355 - 445 x
// 1: 620 - 780 y

// 2: 455 - 545 x
// 2: 620 - 7850 y

// 3: 555 - 645 x
// 3: 620 - 780 y

// 4: 655 - 745 x
// 4: 620 - 780 y

// 5: 755 - 845 x
// 5: 620 - 780 y

