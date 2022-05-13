let button,p1txt, p2txt,player1, player2, p1name, p2name, image1, image2;
import Cat from '../assets/cat.png';
import Dog from '../assets/dog.png';


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
  
}

function setup(){
  p1txt = "player1"
  p2txt = "player2"
  player1 = createInput('');
  player1.position(100,100);
  player1.size(100);
  player1.input(myInputEvent1)

  player2 = createInput('');
  player2.position(200,100);
  player2.size(100);
  player2.input(myInputEvent2);

  // createCanvas(1000,1000)
  button = createButton('click me');
  button.position(300, 100);
  button.mousePressed(moveMain);

  createCanvas(1000,1000)

  button = createButton('switch');
  button.position(300, 200);
  button.mousePressed(changePlayer);


}

function draw(){
  // console.log(p1img, p2img)
  background(183,218,197)
  image(image1,200,200,50,50)
  text("cat", 200, 300)
  image(image2,400,200,30,60)
  text("dog", 400, 300)
  text(p1txt, 200, 200)
  text(p2txt, 400, 200)
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

