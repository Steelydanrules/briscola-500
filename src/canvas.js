const canvas = document.querySelector("canvas");

canvas.width = 1200;
canvas.height = 780;

const c = canvas.getContext('2d');

//card placements:

//left cpu
c.fillRect(0, 105, 160, 90);
c.fillRect(0, 205, 160, 90);
c.fillRect(0, 305, 160, 90);
c.fillRect(0, 405, 160, 90);
c.fillRect(0, 505, 160, 90);

c.fillRect(220, 305, 160, 90);

//right cpu
c.fillRect(1040, 105, 160, 90);
c.fillRect(1040, 205, 160, 90);
c.fillRect(1040, 305, 160, 90);
c.fillRect(1040, 405, 160, 90);
c.fillRect(1040, 505, 160, 90);

c.fillRect(820, 305, 160, 90);

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


c.fillRect(520, 305, 160, 90);

