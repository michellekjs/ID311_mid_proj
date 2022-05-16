Name: 20180517

Email : michellekjs@kaist.ac.kr

GIT repository : http://git.prototyping.id/20180517/mid_project.git


# Description of the Game
## Summary
This game is a board game that was inspired by the snake ladder game. The first person to reach the end of the board wins the game. The board game's each plates have hidden mini-games or advantage/disadvantages.

## Structure
### Starting page
The starting page is written in the code _Introduction.js_ and _index.html_ .
The function of the starting page is to get the player's name as inputs and use them to use in the main game. Along with the name input, the players are displayed on the board game with the characters they chose in the introduction page. If the player presses the 'switch' icon in the center of the screen, each of the players will have switched characters from the default characters. 


### Board page
The board page is written in _Board.js_ , _main.js_, _PlayerBoard.js_, _Header.js_ . 


### Games
Games are written in _Games_ folder. There are 3 games which are each written in folders _ClickGame, RCPGame, SpaceshipGame_. 

#### RCP Game
RCP game is rock-scissors-papers. The rock, scissor, paper are randomly chosen at the same time the player chooses rock/scissor/paper. According to the randomly picked npc's rock/scissor/paper, and the player's choice, the winner is determined. Like the spaceship game, the player gets advantage/disadvantage by the result. If it is a tie, the player's position remains the same. If the player loses, the player goes back 1 cell and if the player wins ,the player will move 1 cell forward.

### Spaceship Game
Spaceship game is where the player controls the position of the spaceship using the arrow keys of the keyboard. The player has to avoid the incoming red rays and last long. The longer they last, they will earn additional jumps to another board cell. When the player is hit by the ray or if certain amount of time passes, the game will end with the "Game Over" sign and the player can return to the boardgame main page. 

# Organization of the code & code explanation
## Introduction page
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


## Board Game
### components/Board.js
Class Cell's constructor is like the following. 
```js
constructor(px, py) {
  this.game = "base"
  this.py = py,
  this.px = px
}
```
The **"game"** determines which game the cell has. It has options  "base", "jump", "reverse", "spaceship", "rcp" . If the player is on the cell with one of these options, the game will do appropriate actions(Start a mini game or move the player front/ back). The color of the cells are different according to the this.game. **px** and **py**  contains information of the position of the cell. 


class Board's constructor is like the following. 
```js
  constructor(sizex, sizey) {
    this.cells = [],
    this.sizex = sizex,
    this.sizey = sizey
  }
```
Along the x-axis and the y-axis , the cells are rendered to form a board(inside the setup() function). Then I set the cells' game to "jump", "reverse", "spaceship", "rcp". 

### components/PlayerBoard.js
In this file, the score of the players are displayed. The player's score is the total amount of forward movement that the player made. Pressing 
### components/Header.js
### components/Games/RCP.js
### components/Games/SpaceShip.js
### ./Main.js


References
