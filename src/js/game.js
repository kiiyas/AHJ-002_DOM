export default class Game {
  constructor(sizeValue) {
    this.cells = [];
    this.size = sizeValue;
    this.position = null;
  }

  buildBoard() {
    const boardField = document.getElementsByClassName('game-container');
    const gameBoard = document.createElement('div');
    gameBoard.className = 'game';
    boardField[0].insertAdjacentElement('afterBegin', gameBoard);
    for (let i = 0; i < this.size ** 2; i += 1) {
      gameBoard.innerHTML += '<div class="game-cell"></div>';
    }
  }

  getRandom() {
    const index = Math.floor(Math.random() * this.size ** 2);
    if (index === this.position) {
      return this.getRandom();
    }
    return index;
  }

  goblinPosition() {
    const cells = document.getElementsByClassName('game-cell');
    const activeCells = document.getElementsByClassName('active');
    setInterval(() => {
      this.position = this.getRandom();
      if (activeCells[0]) {
        activeCells[0].classList.remove('active');
      }
      cells[this.position].classList.add('active');
    }, 2000);
  }

  start() {
    this.buildBoard();
    this.goblinPosition();
  }
}
