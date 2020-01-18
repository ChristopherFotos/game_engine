class Prop {
    constructor(scene, {shape, radius, width, stroke, fill, strokeColor, fillColor, height, x, y, speed, direction, mass, accelMag, friction, collision, movement, movementArray, collisionArray, controls = [], bitmap} = {}){
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
        this.friction = new Vector(0,0);
        this.friction.setLength(friction);
        // this.hitbox = new Hitbox(this.position._x, this.position._y)
        this.controls = controls;
        // this.initToBodiesArray = (function() { this.scene.bodies.unshift(this) })();
        this.initToRenderArray();
        this.initToCollisionArray();

    }

    initToRenderArray(){
        this.scene.render.unshift(this)
    }

    initToCollisionArray(){
        if(this.shape = 'rectangle'){
            this.scene.rectProps.unshift
        }
    }

    accel(){
        // this.velocity.addTo(this.acceleration);
        this.position.addTo(this.velocity)
    }

    // collide(){
    //     if(this.collision){
    //         this.collision.forEach(f => f())
    //     }
    // }

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

                // console.log('bottom: ' + b_collision)
                // console.log('top: ' + t_collision)
                // console.log('left: ' + l_collision)
                // console.log('right: ' + r_collision)
                // console.log('TILES_RIGHT: ' + tiles_right)
                // console.log('_PosX_: ' + this.position)

                // let player_bottom = this.position._y + this.height;
                // let tiles_bottom = this.scene.rectProps[i]._y + this.scene.rectProps[i].height;
                // let player_right = this.position._x + this.width;
                // let tiles_right = this.scene.rectProps[i]._x + this.scene.rectProps[i].width;
                
                // let b_collision = tiles_bottom - this.position._y;
                // let t_collision = player_bottom - this.scene.rectProps[i]._y;
                // let l_collision = player_right - this.scene.rectProps[i]._x;
                // let r_collision = tiles_right - this.position._x;

                console.log(`bottom: ${b_collision} <br>
                top: ${t_collision} <br>
                left: ${l_collision} <br>
                right: ${r_collision} <br>`)

                
                
                if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision )
                {  
                    console.log('top collision ' + this.strokeColor + " " + this.velocity._y)
                    console.log(this.velocity._y)     
                    this.velocity.setY(this.velocity.getY() * -1);

                    let b = document.getElementById('b')
                    b.innerHTML = `
                    *******TOP OF PROP.UPDATE****************** <br>
                    vel length: ${this.velocity.getLength()} <br>
                    accel length: ${this.acceleration.getLength()} <br>
                    vel angle: ${this.velocity.getAngle()} <br>
                    accel angle: ${this.velocity.getAngle()} <br>`
                    
                    console.log(this.velocity._y)

                    
                    
                }
                if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision)                        
                {
                    console.log('bottom collision ' + this.strokeColor + " " + this.velocity._y)  
                    console.log(this.velocity._y)
                    this.velocity.setY(this.velocity.getY() * -1);
                    console.log(this.velocity._y)  
                }
                if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision)
                {
                    console.log('left collision ' + this.strokeColor + " " + this.velocity._x)
                    console.log(this.velocity._x)
                    this.velocity.setX(this.velocity.getX() * -1);
                    console.log(this.velocity._x) 
                }
                if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision )
                {
                    console.log('right collision ' + this.strokeColor + " " + this.velocity._x)
                    console.log(this.velocity._x)
                    this.velocity.setX(this.velocity.getX() * -1);
                    console.log(this.velocity._x)
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
        // if( this.position._x > 0 - this.width && 
        //     this.position._x < this.scene.width + this.width && 
        //     this.position._y > 0 - this.height && 
        //     this.position._y < this.scene.height + this.height){


            // this.hitbox.setPosition(this.position); 
            this.accel()
            // this.controls.forEach(control => {
            //     if(control.firing){
            //         control.behavior();
            //     }
            // })

            this.collide();

            

            // if(this.movement = 'default'){
            // let a = this.velocity.getAngle();
            // this.acceleration.setAngle(a);}
            
            if(this.collision === 'edgeBounce'){
                this.edgeBounce();
            }

            this.draw();

            let c = document.getElementById('c')
            c.innerHTML = `
            *******BOTTOM OF PROP.UPDATE****************** <br>
            vel length: ${this.velocity.getLength()} <br>
            accel length: ${this.acceleration.getLength()} <br>
            vel angle: ${this.velocity.getAngle()} <br>
            accel angle: ${this.velocity.getAngle()} <br>`


        // } 
    }
}
