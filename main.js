import { Board } from './components/Board.js';
import { PlayerBoard } from './components/PlayerBoard.js'
import { Header } from './components/Header.js'
import Cat from './assets/cat.png';
import Dog from './assets/dog.png';
import { Box2, RectAreaLight } from 'three';

let p1, p2, scoreboard,board, image1, image2, randint, cells, header;

function preload(){
  image1 = loadImage(Cat)
  image2 = loadImage(Dog)
  cells = JSON.parse(localStorage.getItem('cells'))
}

function setup() {
  randint = 0;
  createCanvas(windowWidth,windowHeight)
  
  p1 = JSON.parse(localStorage.getItem('player1'));
  p2 = JSON.parse(localStorage.getItem('player2'));
  scoreboard = new PlayerBoard(p1,p2);
  header = new Header();
  
  scoreboard.setup();
  board = new Board(8,8);
  board.setup();
  // console.log(p1.x)
  console.log(p1,p2)

  let button1 = createButton('Random number');
  let button2 = createButton('Dice');
  button1.position(800, 350);
  button2.position(950, 350);
  button1.mousePressed(randomPick);
  button2.mousePressed(dicePick)
}

function draw(){
  
  board.draw();
  scoreboard.draw();
  text(randint, 800, 500)
  header.draw();
  image(image1,p1.x*120 + 400,p1.y*120 + 30,50,50)
  image(image2,p2.x*120+40 + 400,p2.y*120 + 30,30,60)

}

function keyPressed(){
  if (key == 'c') {
    scoreboard.p1.current = !scoreboard.p1.current
    scoreboard.p2.current = !scoreboard.p2.current
    // console.log(scoreboard.p1.current,scoreboard.p2.current )
  }
}

function randomPick() {
  let button = createButton('Pick random number');
  button.position(800, 400);
  button.mousePressed(pickRandom);
}
function dicePick() {
  // box(30)
}

function pickRandom() {
  background(255)
  randint = Math.floor(Math.random()*10)
  let turnplayer = p1.current ==true ? p1 : p2;
  if (turnplayer.x + randint > 7) {
    turnplayer.x = turnplayer.x + randint -8;
    turnplayer.y = turnplayer.y + 1;
  }
  else {
    turnplayer.x = turnplayer.x + randint
  }
// cell.px + cell.py*8
  if ( cells[turnplayer.x + turnplayer.y*8].game == "jump") {
    turnplayer.y = turnplayer.y + 1
  }
  if ( cells[turnplayer.x + turnplayer.y*8].game == "reverse") {
    turnplayer.x = turnplayer.x - 1 == -1 ?turnplayer.x +1 : turnplayer.x -1
    turnplayer.y = turnplayer.y-1
  }
}


window.preload = preload
window.keyPressed = keyPressed;
window.setup = setup;
window.draw = draw;