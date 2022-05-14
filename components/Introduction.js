let button,p1txt, p2txt,player1, player2, p1name, p2name, image1, image2, switchicon;
import Cat from '../assets/cat.png';
import Dog from '../assets/dog.png';
import Switch from '../assets/icons/switch.png';
import { RectAreaLight } from 'three';


let font;
class Player {
  constructor (name) {
    this.name = name,
    this.score = 0,
    this.current = false,
    this.icon = "",
    this.x = 0,
    this.y = 0
  }
}


//localstorage
function preload(){
  image1 = loadImage(Cat)
  image2 = loadImage(Dog)
  switchicon =  loadImage(Switch)
  font = loadFont('../assets/fonts/coolveticarg.otf');
}

function setup(){
  p1txt = "player1"
  p2txt = "player2"
  textFont(font)

  player1 = createInput('');
  player1.position(windowWidth/3 - 130,250);
  player1.style('width', '300px')
  player1.style('height', '80px')
  player1.style('border-radius', '40px')
  player1.style('border-style', 'None')
  // player1.style('box-shadow','3px 3px coral, -1em 0 .4em olive')
  player1.input(myInputEvent1)

  player2 = createInput('');
  player2.position(windowWidth*2/3 - 130,250);
  player2.style('width', '300px')
  player2.style('height', '80px')
  player2.style('border-radius', '40px')
  // player2.style('box-shadow','3px 3px coral, -1em 0 .4em olive')
  player2.style('border-style', 'None')
  player2.input(myInputEvent2);

  // createCanvas(1000,1000)
  button = createButton('Start Game');
  button.position(windowWidth/2 - 130, windowHeight*3/4);
  button.style('width', '300px')
  button.style('height', '80px')
  button.style('border-radius', '40px')
  button.style('border-style', 'none')
  button.style('font-size', '20px')
  button.style('background-color', 'rgb(233,233,233)')
  button.mousePressed(moveMain);


  createCanvas(windowWidth,windowHeight)

}

function draw(){
  background(168,215,241)
  textAlign(CENTER)
  textSize(40)
  
  stroke(255)
  if (mouseX<windowWidth/3+310) {
    fill(185,233,253)
    rect(windowWidth/3- 190,130,400,600,40)
  }
  else{
    fill(185,233,253)
    rect(windowWidth*2/3-190,130,400,600,40)
  }
  
  
  fill(0)
  text("Random Board", windowWidth/2 , 100)
  image(image1,windowWidth*2/3-50,450,150,200)

  textSize(30)
  text("cat", windowWidth/3, 400)
  image(image2,windowWidth/3-50,450,100,200)

  text("dog", windowWidth*2/3, 400)
  text(p1txt, windowWidth/3, 200)
  text(p2txt, windowWidth*2/3, 200)

  button = createButton('');
  
  button.position(windowWidth/2, 400);
  button.style('border-style', 'none')
  button.style('background-color', "none")
  button.style('width', "50px")
  button.style('height', "50px")
  button.mousePressed(changePlayer);

  image(switchicon, windowWidth/2-13, 400, 50, 50)

}


function myInputEvent1() {
  p1name = this.value();
}

function myInputEvent2() {
  p2name = this.value();
}

function moveMain() {
  let p1 = new Player(p1name);
  let p2 = new Player(p2name);

  if (p1txt=="player1") {
    p1.icon = "cat"
    p2.icon = "dog"
  }
  else {
    p2.icon = "cat"
    p1.icon = "dog"
  }

  localStorage.setItem('player1', JSON.stringify(p1));
  localStorage.setItem('player2', JSON.stringify(p2));

  window.location.href = "../game.html"
}

function changePlayer() {
  if (p1txt=="player1"){
    p1txt="player2"
    p2txt="player1"
  }
  else {
    p1txt="player1"
    p2txt="player2"
  }
}

export {Player};

window.preload = preload;
window.setup = setup;
window.draw = draw;

