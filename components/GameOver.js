let font;

function preload() {
  font = loadFont('../assets/fonts/coolveticarg.otf');
}

function draw() {
  let p1 = JSON.parse(localStorage.getItem("player1"))
  let p2 = JSON.parse(localStorage.getItem("player2"))
  let curr = p1.current == true ? p1: p2;

  createCanvas(windowWidth, windowHeight)
  background(0)
  fill(64,180,255)
  textSize(50)
  textFont(font)
  textAlign(CENTER)
  text("BOARD GAME OVER! \n WINNER IS " + curr.name, windowWidth/2, windowHeight/2)


  let button2 = createButton('START AGAIN!');
  button2.position(windowWidth/2-130, windowHeight/2 + 100); 
  button2.mousePressed(startAgain);
  button2.style('border-color', 'rgb(64,180,255)');
  button2.style('width', '300px');
  button2.style('height', '70px');
  button2.style('font-size', '30px')
  button2.style('color', 'white')
  button2.style('background-color', 'rgb(0,0,0)')
  button2.style('border-radius', '20px');
  
}


function startAgain() {
  window.location.href = "../index.html"
}
 


window.preload = preload
window.draw = draw