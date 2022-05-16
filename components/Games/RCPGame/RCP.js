import rock from '../../../assets/rock.png';
import scissor from '../../../assets/scissor.png';
import paper from '../../../assets/paper.png';

let r,s,p,font;
let arr = [];
let turn = 0;
let hand;

function preload(){
  font = loadFont('../assets/fonts/coolveticarg.otf');
}

function setup() {
  r = loadImage(rock)
  s = loadImage(scissor)
  p = loadImage(paper)

  arr.push(r)
  arr.push(s)
  arr.push(p)
  setInterval(changeImage, 100)

  console.log(JSON.parse(localStorage.getItem('player1')))
}

function draw() {
  createCanvas(windowWidth, windowHeight)
  background(0);
  textFont(font);
  fill(255)
  textSize(60)
  text("MINI GAME  - ROCK SCISSOR PAPER", 40, 100)
  textSize(30)
  text("Click one of ROCK, SCISSOR, PAPER on the right side!", 40, 200)
  text("Once you click, the winner and loser will be determined ", 40, 250)

  let backGame = createButton('');
  backGame.style('border', 'none')
  backGame.style('background', 'none')
  backGame.style('width', '100px')
  backGame.style('height', '50px')
  backGame.position(700, 600);
  backGame.mousePressed(() => {
    window.location.href = "../game.html"
  });

  image(arr[turn], windowWidth/3, windowHeight/2-100, 200, 200)

  image(r, windowWidth*2/3, windowHeight/2-400, 200, 200)
  let button1 = createButton('');
  button1.style('border', 'none')
  button1.style('background', 'none')
  button1.style('width', '200px')
  button1.style('height', '200px')
  button1.position(windowWidth*2/3, windowHeight/2-400);
  button1.mousePressed(() => {
    hand = r
    textSize(100)
    fill(64,180,255)
    let t = whoWins(arr[turn], hand)
    text(t, 500, 500)
    backGame.style('background', 'rgb(64,180,255)')
    noLoop()
  });

  image(s, windowWidth*2/3, windowHeight/2-100, 200, 200)
  let button2 = createButton('');
  button2.style('border', 'none')
  button2.style('background', 'none')
  button2.style('width', '200px')
  button2.style('height', '200px')
  button2.position(windowWidth*2/3, windowHeight/2-100);
  button2.mousePressed(() => {
    hand = s
    textSize(100)
    fill(64,180,255)
    let t = whoWins(arr[turn], hand)
    text(t, 500, 500)
    backGame.style('background', 'rgb(64,180,255)')
    noLoop() 
  });

  image(p, windowWidth*2/3, windowHeight/2+200, 200, 200)
  let button3 = createButton('');
  button3.style('border', 'none')
  button3.style('background', 'none')
  button3.style('width', '200px')
  button3.style('height', '200px')
  button3.position(windowWidth*2/3, windowHeight/2+200);
  button3.mousePressed(() => {
    hand = p
    textSize(100)
    fill(64,180,255)
    let t = whoWins(arr[turn], hand)
    text(t, 500, 500)
    backGame.style('background', 'rgb(64,180,255)')
    noLoop()
  });

}


function changeImage() {
  turn = turn + 1;
  if (turn > 2) {
    turn = 0
  }
}

function whoWins(a,b) {
  if (a==r) {
    if (b==r) {
      return ("It is a TIE!")
    } 
    else if (b==s) {
      return ("YOU LOSE")
    }
    else {
      return ("YOU WIN")
    }
  } 
  else if (a==s) {
    if (b==s) {
      return ("It is a TIE!")
    } 
    else if (b==r) {
      return ("YOU LOSE")
    }
    else {
      return ("YOU WIN")
    }
  } 
  else {
    if (b==p) {
      return ("It is a TIE!")
    } 
    else if (b==r) {
      return ("YOU LOSE")
    }
    else {
      return ("YOU WIN")
    }
  } 
}


window.preload = preload
window.setup  = setup
window.draw = draw


