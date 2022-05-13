import { Board } from './components/Board.js';
import { PlayerBoard } from './components/PlayerBoard.js'
import Cat from './assets/cat.png';
import Dog from './assets/dog.png';

let p1, p2, scoreboard,board, image1, image2;

function preload(){
  image1 = loadImage(Cat)
  image2 = loadImage(Dog)
}

function setup() {
  createCanvas(800,800)
  p1 = JSON.parse(localStorage.getItem('player1'));
  p2 = JSON.parse(localStorage.getItem('player2'));
  scoreboard = new PlayerBoard(p1.name,p2.name);
  scoreboard.setup();
}

function draw(){
  board = new Board(8,8);
  board.setup();
  scoreboard.draw();

}

function keyPressed(){
  if (key == 'c') {
    scoreboard.p1.current = !scoreboard.p1.current
    scoreboard.p2.current = !scoreboard.p2.current
    // console.log(scoreboard.p1.current,scoreboard.p2.current )
  }
}

window.keyPressed = keyPressed;
window.setup = setup;
window.draw = draw;