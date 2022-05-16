class Header {
  setup() {
    textAlign(CENTER);
  }

  draw(){
    fill(168,215,241)
    rect(0,0,350, windowHeight)
    textSize(40);
    text("Random Board", 20, 100)

    let button = createButton('Author: Chaeyoung Lee');
    button.position(30, 300);
    button.style('background','none')
    button.style('border', 'none')
    button.style('color', 'white')
    button.style('font-size', '24px')

    let button2 = createButton('Rules');
    button2.position(30, 400);
    fill(255)
    noStroke();
    textSize(20)
    text("Press C to change player", 30, 450)
    text("Manipulate spaceship with arrows", 30, 480)
    text("Reach the end first", 30, 510)
    button2.style('background','none')
    button2.style('border', 'none')
    button2.style('color', 'white')
    button2.style('font-size', '24px')

  }
}


export {Header}