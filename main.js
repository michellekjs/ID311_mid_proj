import { Board } from './components/Board.js';

function draw() {
  board =  new Board();
  board.draw();
}

window.draw = draw;