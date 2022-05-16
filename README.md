Name: 20180517

Email : michellekjs@kaist.ac.kr

GIT repository : http://git.prototyping.id/20180517/mid_project.git


# Description of the Game
## Summary
This game is a board game that was inspired by the snake ladder game. The first person to reach the end of the board wins the game. The board game's each plates have hidden mini-games or advantage/disadvantages.

## Structure
### Starting page
The starting page is written in the code _Introduction.js_ and _index.html_ file.

The function of the starting page is to get the player's name as inputs and use them to use in the main game. Along with the name input, the players are displayed on the board game with the characters they chose in the introduction page. If the player presses the 'switch' icon in the center of the screen, each of the players will have switched characters from the default characters. 

The most important thing is that the player class is defined in _Introduction.js_

```js
class Player {
  constructor (name) {
    this.name = name,
    this.score = 0,
    this.current = false,
    this.icon = "",
    this.x = 0,
    this.y = 0
  }
}
```

The player has name, which is recieved by the input component of p5.js. 'score' is where the score of the player is defined. 'current' is to determine whose turn it is to play. 'icon' is used to determine if the player's character is cat or a dog. Finally, and most importantly, 'x' and 'y' determines the position of the players on the board game. 


### Board page
The board page is written in _Board.js_ , _main.js_, _PlayerBoard.js_, _Header.js_ . 


### Games
Games are written in _Games_ folder. There are 3 games which are each written in folders _ClickGame, RCPGame, SpaceshipGame_. 

## RCP Game
RCP game is rock-scissors-papers. The rock, scissor, paper are randomly chosen at the same time the player chooses rock/scissor/paper. 

Organization of the code

References
