

drawRightComp(cpuFirstCard, cpuSecondCard, cpuThirdCard, cpuFifthCard, noCard, faceDown) {
this.ctx.save();
this.ctx.rotate(-90 * (Math.PI / 180));

// right comp
this.ctx.drawImage(cpuFirstCard, -160, 902, 55, 98);
this.ctx.drawImage(cpuSecondCard, -230, 902, 55, 98);
this.ctx.drawImage(cpuThirdCard, -300, 902, 55, 98);
this.ctx.drawImage(cpuFourthCard, -370, 902, 55, 98);
this.ctx.drawImage(cpuFifthCard, -440, 902, 55, 98);
this.ctx.drawImage(noCard, -314, 700, 81, 144);

// deck
if (this.currentDeck.cardsInDeck.length !== 0) {
    this.ctx.drawImage(faceDown, -320, 474, 55, 98);
} else {
    this.ctx.drawImage(noCard, -320, 474, 55, 98);
};

this.ctx.restore();
this.ctx.save();
}




