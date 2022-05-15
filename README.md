Name: 20180517
Email : michellekjs@kaist.ac.kr
GIT repository : http://git.prototyping.id/20180517/mid_project.git

## Description of the Game
### Summary
This game is a board game that was inspired by the snake ladder game. The first person to reach the end of the board wins the game. The board game's each plates have hidden mini-games or advantage/disadvantages.

### Structure
#### Starting page
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


- Board page
The board 

Organization of the code

References
A description of the game - how it works and what the user has to do
A description of the organization of your code. Feel free to use diagrams, UML, or others. What are the main functions/classes? If you used patterns, what did you use them for, and how do different parts of your code speak to each other?
Highlight any issue you want us to know about, or whether the code has any known bug. If there are special features you want us to know about, write them here
Acknowledge any help or resource you used