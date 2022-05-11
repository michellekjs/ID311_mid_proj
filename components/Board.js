class Cells {
  constructor(px, py) {
    this.game = "base"
    this.py = py,
    this.px = px
  }
  setup() {
    fill(168,215,241)
    stroke(255,255,255)
    strokeWeight(3)
    rect(this.px * 80, this.py * 80, 80, 80)
  }

  draw() {
    this.setup()
  }
}


class Board {
  constructor(sizex, sizey) {
    this.cells = [],
    this.sizex = sizex,
    this.sizey = sizey
  }

  setup() {
    for (let a=0; a<this.sizex ; a++){
      for (let b=0; b<this.sizey ; b++) {
        const newcell = new Cells(a,b);
        this.cells.push(newcell);
        newcell.draw();
      }
    }
  }
}

export {Board};
