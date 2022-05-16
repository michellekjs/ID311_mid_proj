class Header {
  setup() {
    textAlign(CENTER);
  }

  draw(){
    fill(168,215,241)
    rect(0,0,350, windowHeight)
    textSize(40);
    text("Random Board", 20, 100)

    let button = createButton('Author');
    button.position(30, 300);
    button.style('background','none')
    button.style('border', 'none')
    button.style('color', 'white')
    button.style('font-size', '24px')

    let button2 = createButton('Rules');
    button2.position(30, 400);
    button2.style('background','none')
    button2.style('border', 'none')
    button2.style('color', 'white')
    button2.style('font-size', '24px')

  }
}


export {Header}