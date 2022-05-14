class SpaceShip {
  constructor() {
    this.px = 0,
    this.py = 0,
    this.score = 0,
    this.image = ""
  }

  draw() {
    if (keyIsDown("l")){
      this.px = this.px + 30;
    }
    if (keyIsDown("j")) {
      this.px = this.px -30;
    }
    if (this.px > windowWidth){
      this.px = windowWidth
    }
    if (this.py <0){
      this.px = 0
    }
  }
}