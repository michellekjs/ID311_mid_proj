import { Board } from './components/Board.js';
import { PlayerBoard } from './components/PlayerBoard.js'
// import { IntroPage } from './components/Introduction.js';


function setup() {
  createCanvas(800,800)
}

function draw(){
  let board = new Board(8,8);
  let scoreboard = new PlayerBoard("Tom","Jerry");
  board.setup();
  scoreboard.draw();
}

window.setup = setup;
window.draw = draw;