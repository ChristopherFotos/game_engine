class Block {
    constructor(positionX, positionY, width, height){
        this.position = new Vector(positionX, positionY);
        this.width = width;
        this.height = height;
    };

    draw(){
        context.beginPath();
        context.fillRect(this.position._x, this.position._y, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black'; 
    }
}