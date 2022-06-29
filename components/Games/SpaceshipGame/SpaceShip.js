import ss from '../../../assets/spaceship.png';

let ship, simage, rain, rain2, rain3, rp, font, p1, p2, cp, i;

class SpaceShip {
  constructor() {
    this.px = windowWidth/2,
    this.py = windowHeight-100,
    this.score = 0,
    this.image = simage
  }
}

class Rain {
  constructor(speed) {
    this.speed = speed,
    this.length = 3 ,
    this.y = 0,
    this.x = 0
  }
  setup() {
    rp = Math.floor(Math.random()*windowWidth)
    this.x = rp
  }
  draw() {
    this.y = this.speed + this.y
    fill(250,0,0)
    if (this.y >windowHeight){
      this.y = 0
      this.x =  Math.floor(Math.random()*windowWidth)
    }
    else {
      rect(this.x, this.y, 20, 100)
    }
  }
}



function preload() {
  simage= loadImage(ss)
  font = loadFont('../assets/fonts/coolveticarg.otf');
}
function setup() {
  ship = new SpaceShip;
  rain = new Rain(10);
  rain2 = new Rain(15);
  rain3 = new Rain(20)
  i = setInterval(updateScore, 100)
}

function draw() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  textSize(40)
  fill(100,200,200)
  text("SCORE : " + ship.score, 50, 50)
  if (keyIsDown(RIGHT_ARROW)){
    ship.px = ship.px + 30;
  }
  if (keyIsDown(LEFT_ARROW)) {
    ship.px = ship.px -30;
  }
  if (ship.px > windowWidth){
    ship.px = windowWidth
  }
  if (ship.px <0){
    ship.px = 0
  }
  image(ship.image,ship.px, ship.py, 50, 50)
  rain.draw();
  rain2.draw();
  rain3.draw();

  if ((((ship.px+50 > rain.x) & (rain.x > ship.px)) & (((ship.py+50 > rain.y) & (rain.y > ship.py)))) ||(((ship.px+50 > rain2.x) & (rain2.x > ship.px)) & (((ship.py+50 > rain2.y) & (rain2.y > ship.py)))) || (((ship.px+50 > rain3.x) & (rain3.x > ship.px)) & (((ship.py+50 > rain3.y) & (rain3.y > ship.py))))) {
    noLoop();
    clearInterval(i)
    end()
  }
}

function end() {
  noLoop();
  // clearInterval(i)
  createCanvas(windowWidth, windowHeight)
  
  background(40);
  textSize(40);
  fill(255,0,0)
  textFont(font)
  text("GAME OVER!", windowWidth/2-100, windowHeight/2)
  text("YOUR SCORE :" + ship.score, windowWidth/2-150, windowHeight/2 + 50)
  let button1 = createButton('Back to board');
  button1.style('background', 'none')
  button1.style('border-style', 'none')
  button1.style('color', 'white')

  p1 = JSON.parse(localStorage.getItem("player1"))
  p2 = JSON.parse(localStorage.getItem("player2"))
  cp = p1.current == true ? p1 : p2;

  button1.position(windowWidth/2-20, windowHeight/2 + 200);
  button1.mousePressed(backtoBoard)
}


function backtoBoard(){
  if (ship.score > 1000) {
    if (cp.x == 7 ) {
      cp.x= 0
      cp.y = cp.y + 1
    }
    else {
      cp.x = cp.x + 1
    }
  }
  else {
    if (cp.x == 0 ) {
      cp.x = 7
      cp.y = cp.y - 1
    }
    else {
      cp.x = cp.x - 1
    }
  }
  localStorage.setItem("player1", JSON.stringify(p1))
  localStorage.setItem("player2", JSON.stringify(p2))

  window.location.href = "../game.html"
}

function updateScore(){
  ship.score = ship.score + 10
  if (ship.score>1000) {
    end()
  }
}

window.preload = preload
window.setup = setup
window.draw = draw
