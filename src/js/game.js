export default class Game {
  constructor(sizeValue) {
    this.cells = [];
    this.size = sizeValue;
    this.position = null;
  }

  buildBoard() {
    const boardField = document.getElementsByClassName('game-container');
    //
    const gameBoard = document.createElement('div');
    gameBoard.className = 'game';

    const cell = document.createElement('div');
    gameBoard.className = 'game-cell';
    for (let i = 0; i < this.size ** 2; i += 1) {
      gameBoard.innerHTML += cell;
    }
    //
    boardField.appendChild(gameBoard);
  }

  start() {
    this.buildBoard(); // построить поле
    // this.goblinPosition(); // начать таймер
  }
}
