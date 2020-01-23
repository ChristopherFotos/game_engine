class Hitbox {
    constructor(body, width, height, offsetX, offsetY){
        this.body = body;
        this.position = this.body.position;
        this.width = width;
        this.height = height;
        this._x = this.position._x;
        this._y = this.position._y;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    init(){
        context.beginPath();
        context.rect(this.position._x - this.offsetX, this.position._y - this.offsetY, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black';
    }

    updatePosition(){
        this.position = this.body.position
    }

    detectCollision(circleProps, rectProps, pointProps){
        for(let i = 0; i <= rectProps.length; i++){
            if (utils.rectIntersect(this.body.position, rectProps[i].body.position)){
                this.body.height = 5000;
            }
            
            ;
        }

        for(let i = 0; i <= circleProps.length; i++){
            utils.rectIntersect(this.body.position, circleProps[i].body.position);
        }

        for(let i = 0; i <= pointProps.length; i++){
            utils.rectIntersect(this.body.position, pointProps[i].body.position);
        }
    }

    update(){
        this.init();
        // this.detectCollision(circleProps, rectProps, pointProps);
    }

}