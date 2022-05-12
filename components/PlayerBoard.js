class Player {
  constructor (name) {
    this.name = name,
    this.score = 0
  }
}

class PlayerBoard{
  constructor(player1,player2) {
    this.p1 = new Player(player1)
    this.p2 = new Player(player2)
  }

  draw(){
    textSize(20);
    fill(0,0,0);
    textFont('Arial');
    text(this.p1.name + 'Score:' + this.p1.score,600 ,10, 30)
    text(this.p2.name + 'Score:'+ this.p2.score,600 ,50, 30)
  }
} 

export {PlayerBoard, Player}