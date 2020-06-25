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

//cpu teammate
c.fillRect(355, 0, 90, 80);
c.fillRect(455, 0, 90, 80);
c.fillRect(555, 0, 90, 80);
c.fillRect(655, 0, 90, 80);
c.fillRect(755, 0, 90, 80);

c.fillRect(555, 100, 90, 160);

//player
c.fillRect(355, 620, 90, 160);
c.fillRect(455, 620, 90, 160);
c.fillRect(555, 620, 90, 160);
c.fillRect(655, 620, 90, 160);
c.fillRect(755, 620, 90, 160);

c.fillRect(555, 440, 90, 160);

make_base();



function make_base() {
  base_image = new Image();
  base_image.src = "../images/card-back.jpg";
  base_image.onload = function () {
    c.save();
    c.rotate(-90 * (Math.PI / 180));

    //left cpu
    c.drawImage(base_image, -195, 0, 90, 160);
    c.drawImage(base_image, -295, 0, 90, 160);
    c.drawImage(base_image, -395, 0, 90, 160);
    c.drawImage(base_image, -495, 0, 90, 160);
    c.drawImage(base_image, -595, 0, 90, 160);

    c.drawImage(base_image, -395, 205, 90, 160);

    //right cpu

    c.drawImage(base_image, -195, 1040, 90, 160);
    c.drawImage(base_image, -295, 1040, 90, 160);
    c.drawImage(base_image, -395, 1040, 90, 160);
    c.drawImage(base_image, -495, 1040, 90, 160);
    c.drawImage(base_image, -595, 1040, 90, 160);

    c.drawImage(base_image, -395, 820, 90, 160);

    

    c.drawImage(base_image, -395, 520, 90, 160);
    c.restore();
  };
}

    c.fillRect(1040, 105, 160, 90);
    c.fillRect(1040, 205, 160, 90);
    c.fillRect(1040, 305, 160, 90);
    c.fillRect(1040, 405, 160, 90);
    c.fillRect(1040, 505, 160, 90);

    c.fillRect(820, 305, 160, 90);



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

