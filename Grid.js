class Grid {
  constructor(scene, width, height, cellSize) {
    this.scene = scene;
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.columns = [];
    this.createGrid();
    this.insertProps()
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

  findColumns(prop){
    const columns = [];
    this.columns.forEach(column => {
      if (
        utils.rangeIntersect(
          column.x,
          column.x + column.width,
          prop.position._x,
          prop.position._x + prop.width
        )
      ) {
        columns.push(column)
      }
    })
    return columns
  }

  findCells(prop, column){
    let propCells = []
    column.cells.forEach(cell => {
      if (
        utils.rangeIntersect(
          cell.y,
          cell.y + cell.size,
          prop.position._y,
          prop.position._y + prop.height
        )
      ) {
        propCells.push();
      } 
    })

    return propCells;
  }

  insertProp(prop) {

    let columns = this.findColumns(prop)

    let cells = columns.forEach(column => {
      this.findCells(prop, column)
    })

    return cells
  }

  insertPropArray(){
    this.scene.rectProps.forEach(prop => {
      
    })
  }
}
