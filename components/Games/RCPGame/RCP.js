class RCP {
  constructor() {
    this.first = "rock"
  }
}

import ss from '../../../assets/spaceship.png';
import { RectAreaLight } from 'three';

let ship, simage, rain, rain2, rain3, rp, font;

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
}

function draw() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  if (keyIsDown(RIGHT_ARROW)){
    ship.px = ship.px + 30;
  }
  if (keyIsDown(LEFT_ARROW)) {
    ship.px = ship.px -30;
  }
  if (ship.px > windowWidth){
    ship.px = windowWidth
  }
  if (ship.py <0){
    ship.px = 0
  }
  image(ship.image,ship.px, ship.py, 50, 50)
  rain.draw();
  rain2.draw();
  rain3.draw();

  if ((((ship.px+50 > rain.x) & (rain.x > ship.px)) & (((ship.py+50 > rain.y) & (rain.y > ship.py)))) ||(((ship.px+50 > rain2.x) & (rain2.x > ship.px)) & (((ship.py+50 > rain2.y) & (rain2.y > ship.py)))) || (((ship.px+50 > rain3.x) & (rain3.x > ship.px)) & (((ship.py+50 > rain3.y) & (rain3.y > ship.py))))) {
    end()
  }
}

function end() {
  noLoop()
  createCanvas(windowWidth, windowHeight)
  background(100);
  textSize(40);
  fill(200,0,0)
  textFont(font)
  text("GAME OVER!", windowWidth/2-100, windowHeight/2)
  let button1 = createButton('Back to board');
  button1.style('background', 'none')
  button1.style('border-style', 'none')

  button1.position(windowWidth/2-20, windowHeight/2 + 40);
  button1.mousePressed(backtoBoard)
}


function backtoBoard(){
  window.location.href = "../game.html"
}

window.preload = preload
window.setup = setup
window.draw = draw
