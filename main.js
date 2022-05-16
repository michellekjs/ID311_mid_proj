import { Board } from './components/Board.js';
import { PlayerBoard } from './components/PlayerBoard.js'
import { Header } from './components/Header.js'
import Cat from './assets/cat.png';
import Dog from './assets/dog.png';

let p1, p2, scoreboard,board, image1, image2, randint, cells, header, font;

function preload(){
  image1 = loadImage(Cat)
  image2 = loadImage(Dog)
  cells = JSON.parse(localStorage.getItem('cells'))
  font = loadFont('../assets/fonts/coolveticarg.otf');
}

function setup() {
  randint = 0;
  createCanvas(windowWidth,windowHeight)
  
  p1 = JSON.parse(localStorage.getItem('player1'));
  p2 = JSON.parse(localStorage.getItem('player2'));
  scoreboard = new PlayerBoard(p1,p2);
  scoreboard.preload();
  scoreboard.setup();

  header = new Header();
  board = new Board(8,8); 
  board.setup();
}

function draw(){
  let button1 = createButton('Random number');
  button1.position(windowWidth-500, 350);
  button1.mousePressed(pickRandom);
  button1.style('border', 'none');
  button1.style('width', '300px');
  button1.style('height', '70px');
  button1.style('font-size', '30px')
  button1.style('background-color', 'rgb(168,215,241)')
  button1.style('border-radius', '20px');

  let button2 = createButton('RESET');
  button2.position(windowWidth-500, 700); 
  button2.mousePressed(resetScore);
  button2.style('border', 'none');
  button2.style('width', '300px');
  button2.style('height', '70px');
  button2.style('font-size', '30px')
  button2.style('background-color', 'rgb(230,230,230)')
  button2.style('border-radius', '20px');


  board.draw();
  scoreboard.draw();
  textSize(50)
  fill(100,100,100)
  text(randint, windowWidth-360, 500)
  header.draw()

  if (p1.icon == "cat") {
    image(image2,p1.x*120+400,p1.y*120 + 30,30,60)
    image(image1,p2.x*120+40+400,p2.y*120 + 30,50, 50)
  }
  else {
    image(image1,p1.x*120+400,p1.y*120 + 30,50,50)
    image(image2,p2.x*120+40+400,p2.y*120 + 30,30,60)
  }

  localStorage.setItem("player1", JSON.stringify(p1));
  localStorage.setItem("player2", JSON.stringify(p2));
}

function keyPressed(){
  if (key == 'c') {
    scoreboard.p1.current = !scoreboard.p1.current
    scoreboard.p2.current = !scoreboard.p2.current
  }
}


function resetScore() {
  p1.x = 0
  p1.y = 0
  p2.x = 0
  p2.y = 0
  localStorage.setItem("player1", JSON.stringify(p1));
  localStorage.setItem("player2", JSON.stringify(p2));
}

function pickRandom() {
  background(255)
  randint = Math.floor(Math.random()*5)
  let turnplayer = p1.current ==true ? p1 : p2;
  console.log(turnplayer.score)

  if(turnplayer.score + randint >= 63) {
    noLoop();
    window.location.href = "../gameover.html"
  }

  if (turnplayer.x + randint > 7) {
    turnplayer.x = turnplayer.x + randint -8;
    turnplayer.y = turnplayer.y + 1;
  }
  else {
    turnplayer.x = turnplayer.x + randint
  }
  if ( cells[turnplayer.x + turnplayer.y*8].game == "jump") {
    turnplayer.y = turnplayer.y + 1
  }
  if ( cells[turnplayer.x + turnplayer.y*8].game == "reverse") {
    turnplayer.x = turnplayer.x - 1 == -1 ?turnplayer.x +1 : turnplayer.x -1
    turnplayer.y = turnplayer.y-1
  }

  localStorage.setItem("player1", JSON.stringify(p1));
  localStorage.setItem("player2", JSON.stringify(p2));

  if ( cells[turnplayer.x + turnplayer.y*8].game == "spaceship") {
    window.location.href = "../mini.html"
  }
  if ( cells[turnplayer.x + turnplayer.y*8].game == "rcp") {
    window.location.href = "../rcp.html"
  }

}


window.preload = preload
window.keyPressed = keyPressed;
window.setup = setup;
window.draw = draw;