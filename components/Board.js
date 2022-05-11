class Cells {
  constructor(px, py) {
    this.type = "base",
    this.py = py,
    this.px = px
  }
  draw() {
    rect(px * 10, py*10, 10 , 10 )
  }
}




class Board {
  constructor(sizex, sizey) {
    this.cells = []
    this.sizex = sizex,
    this.sizey = sizey
  }

  draw() {
    for (let a; a<=this.sizex ; a++){
      for (let b; b<=this.sizey ; b++) {
        const newcell = new Cells(a,b)
        newcell.draw();
      }
    }
  }

}

export { Board, Cells };
