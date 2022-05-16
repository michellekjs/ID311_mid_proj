class Cells {
  constructor(px, py) {
    this.game = "base"
    //jump, reverse, minigame
    this.py = py,
    this.px = px
  }
  setup() {
    if (this.px == 0 & this.py ==0){
      fill(157,220, 167)
    }
    else if (this.px ==7 & this.py ==7) {
      fill(196,44, 146)
    }
    else {
      fill(168,215,241)
    }
    stroke(255,255,255)
    strokeWeight(5)
    rect(this.px * 120 + 400, this.py * 120+ 20, 120, 120)
  }

  draw() {
    this.setup()
    if (this.game == "jump") {
      fill(254,192,142)
      
    }
    else if (this.game == "reverse") {
      fill(254,248,142)
    }
    else if (this.game == "spaceship") {
      fill(254,0,142)
    }
    else if (this.game == "rcp") {
      fill(0,100,142)
    }
    rect(this.px * 120+ 400, this.py * 120+ 20, 120, 120)
  }
}


class Board {
  constructor(sizex, sizey) {
    this.cells = [],
    this.sizex = sizex,
    this.sizey = sizey
  }

  setup() {
    createCanvas(windowWidth,windowHeight);
    for (let a=0; a<this.sizex ; a++){
      for (let b=0; b<this.sizey ; b++) {
        const newcell = new Cells(b,a);
        this.cells.push(newcell);
        newcell.draw();
      }
    }
    //jumping to certain positions
    let jumparr = [10,15,24, 44, 46]
    let reversearr = [9, 16, 20, 30, 50]
    for (let cell=0; cell<5 ; cell++) {
      this.cells[jumparr[cell]].game = "jump"
    }
    //reverse to certain positions
    for (let cell=0; cell<5 ; cell++) {
      this.cells[reversearr[cell]].game = "reverse"
    }
    
    this.cells[1].game = "spaceship"
    this.cells[2].game = "rcp"
    localStorage.setItem("cells", JSON.stringify(this.cells)); 

  }

  draw() {
    for (let i=0; i<this.cells.length; i++) {
      this.cells[i].draw();
    }
  }
}

export {Board}; 
