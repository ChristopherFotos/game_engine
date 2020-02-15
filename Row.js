class Row {
  constructor(x, y, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.range = [this.y, this.y + this.height];
    this.cells = [];
  }
  addCell() {}
}
