class Prop {
    constructor(scene, {shape, radius, width, stroke, fill, strokeColor, fillColor, height, x, y, speed, direction, 
        mass, accelMag, friction, collision, movement, movementArray, collisionArray, controls = [], bitmap} = {}){

        this.scene = scene;
        this.shape = shape;
        this.radius = radius;
        this.width = width;
        this.height = height;
        this.stroke = stroke;
        this.fill = fill;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.collision = collision;
        this.collisionArray = collisionArray;
        this.bitmap = bitmap;
        this.position = new Vector(x, y);
        this.direction = direction;
        this.velocity = new Vector(0,0);
        this.velocity.setLength(speed);
        this.velocity.setAngle(this.direction);
        this.mass = mass;
        this.acceleration = new Vector(0, 0);
        this.acceleration.setLength(accelMag);
        this.acceleration.setAngle(this.direction);
        this.movement = movement;
        this.movementArray = movementArray;
        this.friction = friction;
        this.controls = controls;
        this.initToRenderArray();
        this.initToCollisionArray();
    }

    initToRenderArray(){
        this.scene.rectProps.unshift(this)
    }

    initToCollisionArray(){
        if(this.shape = 'rectangle'){
            this.scene.rectProps.unshift
        }
    }

    accel(){
        this.velocity.addTo(this.acceleration);
        this.position.addTo(this.velocity)
        this.velocity.multiplyBy(this.friction)
        this.acceleration.multiplyBy(this.friction)

        if(this.movement = 'default'){
            let a = this.velocity.getAngle();
            this.acceleration.setAngle(a);
        }
    }


    edgeBounce(){
        if(this.position._x < 0 || 
        this.position._x + this.width> this.scene.width){

            this.acceleration.multiplyBy(-1);
            this.velocity._x *= -1
        };

        if(this.position._y < 0 || 
        this.position._y + this.height > this.scene.height){
            this.acceleration.multiplyBy(-1);
            this.velocity._y *= -1    
        }
    }

    collide(){ 
        for (let i = 0; i < this.scene.rectProps.length; i++){
            if(utils.rectIntersect(this.scene.rectProps[i], this) && this.scene.rectProps[i] != this){

                let player_bottom = this.position._y + this.height;
                let tiles_bottom = this.scene.rectProps[i].position._y + this.scene.rectProps[i].height;
                let player_right = this.position._x + this.width;
                let tiles_right = this.scene.rectProps[i].position._x + this.scene.rectProps[i].width;
                
                let b_collision = tiles_bottom - this.position._y;
                let t_collision = player_bottom - this.scene.rectProps[i].position._y;
                let l_collision = player_right - this.scene.rectProps[i].position._x;
                let r_collision = tiles_right - this.position._x;
                               
                if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision )
                {  
                    this.velocity.setY(this.velocity.getY() * -1);
                }
                if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision)                        
                {
                    this.velocity.setY(this.velocity.getY() * -1);
                }
                if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision)
                {
                    this.velocity.setX(this.velocity.getX() * -1);
                }
                if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision )
                {
                    this.velocity.setX(this.velocity.getX() * -1);
                }
            } 
        }
    }

    draw(){
        if(this.shape = 'rectangle'){
            this.scene.context.beginPath();
            this.scene.context.rect(this.position._x, this.position._y, this.width, this.height);
            this.scene.context.strokeStyle = this.strokeColor;
            this.scene.context.fillStyle = this.fillColor;
            if(this.fill){
                this.scene.context.fill();
            }
            if(this.stroke){
                this.scene.context.stroke();
            }
        }

        this.scene.context.closePath();
    }

    update(){
            this.accel()
            this.collide();
            if(this.collision === 'edgeBounce'){
                this.edgeBounce();
            }
            this.draw();
    }
}
