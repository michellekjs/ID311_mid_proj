let button,player1, player2, p1, p2, image1, image2;
import Cat from '../assets/cat.png';
import Dog from '../assets/dog.png';

//localstorage
function preload(){
  image1 = loadImage(Cat)
  image2 = loadImage(Dog)
}

function setup(){
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
}

function myInputEvent1() {
  p1 = this.value();
}

function myInputEvent2() {
  p2 = this.value();
}

function moveMain() {
  // console.log(player1.input)
  localStorage.setItem('player1', JSON.stringify(p1));
  localStorage.setItem('player2', JSON.stringify(p2));
  window.location.href = "../game.html"
}

function draw(){
  //image player selection 
  createCanvas(1000,1000)
  image(image1,200,200,50,50)
  image(image2,200,300,30,60)
}

window.preload = preload;
window.setup = setup;
window.draw = draw;