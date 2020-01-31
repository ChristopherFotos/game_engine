class Prop {
    constructor(scene, {shape, radius, width, stroke, fill, strokeColor, fillColor, height, x, y, fixed, speed, direction, 
        mass, solid, accelMag, customProperties, customFunctions, collisionFunctions, friction, elasticity, minSpeed, collision, nograv, movement, movementArray, controls = [], bitmap} = {}){

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
        this.bitmap = bitmap;
        this.position = new Vector(x, y);
        this.direction = direction;
        this.velocity = new Vector(0,0);
        this.velocity.setLength(speed);
        this.velocity.setAngle(this.direction);
        this.mass = mass;
        this.solid = solid;
        this.acceleration = new Vector(0, 0);
        this.acceleration.setLength(accelMag);
        this.acceleration.setAngle(this.direction);
        this.movement = movement;
        this.movementArray = movementArray;
        this.friction = friction;
        this.elasticity = elasticity;
        this.minSpeed = minSpeed;
        this.controls = controls;
        this.nograv = nograv;
        this.initToRenderArray();
        this.fixed = fixed;
        this.customProperties = customProperties;
        this.customFunctions = customFunctions;
        this.collisionFunctions = collisionFunctions;
        this.colliding = false;
        this.render = true;
        
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
        if(!this.fixed){
        this.velocity.addTo(this.acceleration);
        this.position.addTo(this.velocity);
        this.velocity.multiplyBy(this.friction);
        this.acceleration.multiplyBy(this.friction);

        if(this.scene.gravity && !this.nograv){
            if((this.position._y + this.height) < (this.scene.height - 0.0001)){
                this.velocity._y += this.mass;
            }
        }    

        if(this.movement = 'default'){
            let a = this.velocity.getAngle();
            this.acceleration.setAngle(a);
        }
      } else if(this.fixed){
          this.velocity.setLength(1)
          this.acceleration.setLength(0)
      }

    }


    edgeBounce(){
        if(this.position._x < 0 || 
        this.position._x + this.width> this.scene.width){

            this.acceleration.multiplyBy(-1);
            this.velocity._x *= this.elasticity
        };

        if(this.position._y < 0 || 
        this.position._y + this.height > this.scene.height){
            this.acceleration.multiplyBy(-1);
            this.velocity._y *= this.elasticity  
        }
    }

    collide(){ 
        let boundCollision = collisionFunction.bind(this);
        boundCollision()
    }

    handleCollision(){
        for (let i = 0; i < this.scene.rectProps.length; i++){
            if(utils.rectIntersect(this.scene.rectProps[i], this) && this.scene.rectProps[i] != this){
                this.collisionFunctions.forEach(cfunc => {
                    let bcfunc = cfunc.bind(this)
                    bcfunc()
                })
            }
        }
    };



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
        if(this.render){ 

            this.accel();

            if(this.solid){this.collide()};

            if(this.collision === 'edgeBounce'){this.edgeBounce()};
            
            if(this.fixedX){
                console.log('fixedX')
                this.position._x = this.fixedX
            };

            if(this.fixedY){
                console.log('fixedY')
                this.position._y = fixedY
            }

           if(this.customFunctions){ 
                this.customFunctions.forEach(func => {
                let bfunc = func.bind(this);
                bfunc()    
                }
              );
           }

          if(this.collisionFunctions){
              this.handleCollision()
            }

           this.draw(); 
        } else {
            this.position = new Vector(undefined, undefined)
        }
    }

}

