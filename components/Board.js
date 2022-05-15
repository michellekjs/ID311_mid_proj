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
      rect(this.px * 120+ 400, this.py * 120+ 20, 120, 120)
    }
    else if (this.game == "reverse") {
      fill(254,248,142)
      rect(this.px * 120+ 400, this.py * 120+20, 120, 120)
    }
    else if (this.game == "spaceship") {
      fill(254,0,142)
      rect(this.px * 120+ 400, this.py * 120+20, 120, 120)
    }
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
        const newcell = new Cells(a,b);
        this.cells.push(newcell);
        newcell.draw();
      }
    }
    //jumping to certain positions
    const jumpCell = this.cells.slice(1,).sort(()=>0.5 - Math.random());
    const jumping = jumpCell.slice(0,6);
    for (let cell=0; cell<6 ; cell++) {
      jumping[cell].game = "jump"
    }
    //reverse to certain positions
    const reverse = jumpCell.slice(6,12); 
    for (let cell=0; cell<6 ; cell++) {
      reverse[cell].game = "reverse"
    }

    const rcp = jumpCell.slice(12,14); 
    // for (let cell=0; cell<6 ; cell++) {
    //   rcp[cell].game = "rcp" // this is rock scissor paper
    // }

    // const spaceship = jumpCell.slice(14,16); 
    // for (let cell=0; cell<6 ; cell++) {
    //   spaceship[cell].game = "spaceship" // this is rock scissor paper
    // }
    this.cells[8].game = "spaceship"
    localStorage.setItem("cells", JSON.stringify(this.cells)); 
  }

  draw() {
    for (let i=0; i<this.cells.length; i++) {
      this.cells[i].draw();
    }
  }
}

export {Board};
