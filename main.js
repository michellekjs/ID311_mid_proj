import { Board } from './components/Board.js';
import { PlayerBoard } from './components/PlayerBoard.js'

function setup() {
  createCanvas(800,800)
}

function draw(){
  let board = new Board(8,8);
  board.setup();
  let scoreboard = new PlayerBoard("Tom","Jerry");
  scoreboard.draw();
}

window.setup = setup;
window.draw = draw;