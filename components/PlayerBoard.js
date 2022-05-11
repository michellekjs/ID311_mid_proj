class PlayerBoard{
  constructor(player1,player2) {
    this.p1 = player1,
    this.p2 = player2
  }
  draw(){
    textSize(20);
    fill(0,0,0);
    textFont('Arial');
    text(this.p1 + 'Score:',700 ,10, 30)
    text(this.p2 + 'Score:',700 ,50, 30)
  }
} 

export {PlayerBoard}