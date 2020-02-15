class Grid {
  constructor(scene, width, height, cellSize) {
    this.scene = scene;
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.columns = [];
    this.createGrid();
  }

  addColumn(x, y, width, scene) {
    this.columns.push(new Column(x, y, width, scene));
  }

  createGrid() {
    //Create columns
    for (
      let i = 0;
      i < this.scene.width + (this.cellSize + 1);
      i += this.cellSize
    ) {
      this.addColumn(i, 0, this.cellSize, this.scene);
    }
  }

  insertProps() {
    this.scene.rectProps.forEach(prop => {
      //Find the column the prop belongs to
      let col = null;
      this.columns.forEach(column => {
        if (
          utils.rangeIntersect(
            column.x,
            column.x + column.width,
            prop.position._x,
            prop.position._x + prop.width
          )
        ) {
          col = column;
        }
      });

      //Find the cell the prop belongs to
      let cell = null;
      col.cells.forEach(cell => {
        if (
          utils.rangeIntersect(
            cell.x,
            cell.x + cell.size,
            prop.position._y,
            prop.position._y + prop.height
          )
        ) {
          col = column;
        }
      });
    });
  }
}
