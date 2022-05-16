import rock from '../../../assets/rock.png';
import scissor from '../../../assets/scissor.png';
import paper from '../../../assets/paper.png';
import { StreamCopyUsage } from 'three';

let r,s,p,font, p1,p2,cp;
let arr = [];
let turn = 0;
let hand, t, inter;


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
  inter = setInterval(changeImage, 100)

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
  backGame.position(windowWidth -200, 40);
  backGame.mousePressed(() => {
    window.location.href = "../game.html"
  });

  backGame.style('background', 'rgb(64,180,255)')

  image(arr[turn], windowWidth/3, windowHeight/2-100, 200, 200)

  image(r, windowWidth*2/3, windowHeight/2-400, 200, 200)
  let button1 = createButton('');
  button1.style('border', 'none')
  button1.style('background', 'none')
  button1.style('width', '200px')
  button1.style('height', '200px')
  button1.position(windowWidth*2/3, windowHeight/2-400);
  button1.mousePressed(() => {
    clearInterval(inter)
    end();
    hand = r
    console.log(arr[turn], hand)
    whoWins(arr[turn], hand);
    textSize(100)
    fill(64,180,255)
    text(t, 500, 500)
    
    // end()
  });

  image(s, windowWidth*2/3, windowHeight/2-100, 200, 200)
  let button2 = createButton('');
  button2.style('border', 'none')
  button2.style('background', 'none')
  button2.style('width', '200px')
  button2.style('height', '200px')
  button2.position(windowWidth*2/3, windowHeight/2-100);
  button2.mousePressed(() => {
    end() 
    clearInterval(inter)
    hand = s
    console.log(arr[turn], hand)
    whoWins(arr[turn], hand);
    textSize(100)
    fill(64,180,255)
    text(t, 500, 500)
    
    // end()
  });

  image(p, windowWidth*2/3, windowHeight/2+200, 200, 200)
  let button3 = createButton('');
  button3.style('border', 'none')
  button3.style('background', 'none')
  button3.style('width', '200px')
  button3.style('height', '200px')
  button3.position(windowWidth*2/3, windowHeight/2+200);
  button3.mousePressed(() => {
    end();
    clearInterval(inter)
    hand = p
    console.log(arr[turn], hand)
    whoWins(arr[turn], hand);
    textSize(100)
    fill(64,180,255)
    text(t, 500, 500)
    
    // end()
  });
}

function end() {
  noLoop();
}
function changeImage() {
  turn = turn + 1;
  if (turn > 2) {
    turn = 0
  }
}

function whoWins(a,b) {
  p1 = JSON.parse(localStorage.getItem("player1"))
  p2 = JSON.parse(localStorage.getItem("player2"))
  cp = p1.current == true ? p1 : p2;

  if (a==r) {
    if (b==r) {
      tie()
      t= ("It is a TIE!")
    } 
    else if (b==s) {
      lose()
      t= ("YOU LOSE")
    }
    else {
      win()
      t=  ("YOU WIN")
    }
  } 
  else if (a==s) {
    if (b==s) {
      tie()
      t =  ("It is a TIE!")
    } 
    else if (b==r) {
      win()
      t= ("YOU WIN")
    }
    else {
      lose()
      t= ("YOU LOSE")
    }
  } 
  else {
    if (b==p) {
      tie()
      t= ("It is a TIE!")
    } 
    else if (b==r) {
      lose()
      t =  ("YOU LOSE")
    }
    else {
      win()
      t =  ("YOU WIN")
    }
  }
  
  localStorage.setItem("player1", JSON.stringify(p1))
  localStorage.setItem("player2", JSON.stringify(p2)) 
}



function lose() {
  if (cp.x == (0 || 1)) {
    cp.x = 6 + cp.x
    cp.y -=1
  }
  else {
    cp.x = cp.x - 2
  }
}

function win() {
  if (cp.x ==7) {
      console.log("WON")
      cp.x = 0
      cp.y = cp.y + 1
    }
    else {
      cp.x =  cp.x + 1
    }
}
function tie(){
  if (cp.x == 0) {
    cp.x = 7
    cp.y = cp.y -1
  }
  else {
    console.log(cp.x)
    cp.x  = cp.x -1
  }
}

window.end = end
window.preload = preload
window.setup  = setup
window.draw = draw



