let button ; 

function setup(){
  createCanvas(1000,1000)
  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(moveMain);


  let player1 = createInput('');
  player1.position(100,100);
  player1.size(100);

  let player2 = createInput('');
  player2.position(300,100);
  player2.size(100);
}

function moveMain() {
  window.location.href = "../game.html"

}

export {Player}

window.setup = setup;