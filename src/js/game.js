export default class Game {
  constructor(sizeValue) {
    this.cells = [];
    this.size = sizeValue;
    this.position = null;
  }

  // eslint-disable-next-line class-methods-use-this
  buildBoard() {
    console.log('buildBoard');
  }

  start() {
    this.buildBoard(); // построить поле
    // this.goblinPosition(); // начать таймер
  }
}
