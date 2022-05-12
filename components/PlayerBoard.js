class Player {
  constructor (name) {
    this.name = name,
    this.score = 0,
    this.current = false,
    this.icon = ""
  }
}

class PlayerBoard{
  constructor(player1,player2) {
    this.p1 = new Player(player1)
    this.p2 = new Player(player2)
  }

  setup() {
    this.p1.current = true;
    this.p2.current = false;
  }

  draw(){
    textSize(30);
    textFont('Arial');
    if (this.p1.current == true) {
      fill(95,116,202);
      text(this.p1.name + 'Score:' + this.p1.score,600 ,10, 30)
      fill(100,100,100);
      text(this.p2.name + 'Score:'+ this.p2.score,600 ,50, 30)
    }
    else {
      fill(100,100,100);
      text(this.p1.name + 'Score:' + this.p1.score,600 ,10, 30)
      fill(95,116,202);
      text(this.p2.name + 'Score:'+ this.p2.score,600 ,50, 30)
    }
    
    
  }
} 

export {PlayerBoard, Player}