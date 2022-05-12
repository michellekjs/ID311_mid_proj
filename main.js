import { Board } from './components/Board.js';
import { PlayerBoard } from './components/PlayerBoard.js'

let p1, p2, scoreboard,board;

function setup() {
  createCanvas(800,800)
  p1 = localStorage.getItem('player1');
  p2 = localStorage.getItem('player2');
  scoreboard = new PlayerBoard(p1,p2);
  scoreboard.setup();
}

function draw(){
  board = new Board(8,8);
  board.setup();
  scoreboard.draw();
}

function keyPressed(){
  if (key == 'c') {
    console.log("c")
    scoreboard.p1.current = !scoreboard.p1.current
    scoreboard.p2.current = !scoreboard.p2.current
    console.log(scoreboard.p1.current,scoreboard.p2.current )
  }
}

window.keyPressed = keyPressed;
window.setup = setup;
window.draw = draw;