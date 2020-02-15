class Cell {
  constructor(x, y, size, scene) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.scene = scene;
    this.props = [];
  }

  addProp(prop) {
    //add a prop to the cell
    this.props.push(prop);
  }

  removeProp(prop) {
    this.props.pop(prop);
  }

  draw() {
    console.log(this.x + " " + this.y + " " + this.width + " " + this.height);
  }
}
