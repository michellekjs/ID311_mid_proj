import { Player } from "./Introduction.js";

let font;

class PlayerBoard{
  constructor(player1,player2) {
    this.p1 = player1
    this.p2 = player2
  }

  preload(){
    font = loadFont('../assets/fonts/coolveticarg.otf');
  }

  setup() {
    this.p1.current = true;
    this.p2.current = false;
  }

  draw(){
    this.p1.score = this.p1.x + this.p1.y*8;
    this.p2.score = this.p2.x  + this.p2.y*8;
    console.log(this.p1.x, this.p1.y, this.p2.x, this.p2.y)

    textSize(50);
    textFont(font);
    if (this.p1.current == true) {
      fill(95,116,202);
      text(this.p1.name + 'Score:' + this.p1.score,windowWidth-500 ,50, 30)
      fill(100,100,100);
      text(this.p2.name + 'Score:'+ this.p2.score,windowWidth-500 ,100, 30)
    }
    else {
      fill(100,100,100);
      text(this.p1.name + 'Score:' + this.p1.score,windowWidth-500 ,50, 30)
      fill(95,116,202);
      text(this.p2.name + 'Score:'+ this.p2.score,windowWidth-500 ,100, 30)
    }
  }
} 

export {PlayerBoard}