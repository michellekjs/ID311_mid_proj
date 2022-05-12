import { Subject } from "./Subject.js";

let button ;
let player1 ; 
let player2 ;

class IntroPage extends Subject{
  setup(){
  
    player1 = createInput('');
    player1.position(100,100);
    player1.size(100);
  
    player2 = createInput('');
    player2.position(200,100);
    player2.size(100);


    createCanvas(1000,1000)
    button = createButton('click me');
    button.position(300, 100);
    button.mousePressed(moveMain);
  }
}

function moveMain() {
  window.location.href = "../game.html"
}

let intro = new IntroPage();

window.setup = intro.setup;