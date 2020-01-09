class Ship extends Particle{
    constructor(x, y, speed, direction, grav=0, friction = 1, angle, thrustingLength){

        super(x, y, speed, direction, grav, friction);

        this.angle = angle;
        this.thrust = new Vector(0, 0);
        this.thrustingLength = thrustingLength;
        this.thrusting = false;
        this.turningLeft = false;
        this.turningRight = false;
        this.boosting = false;
        this.shooting = false;

    }


    shoot(x, y){
        projectilesArray.push(new Projectile(x, y, this.velocity.getLength() * 2, this.angle, 0, 0.9, this.angle))
    }

    drawShip(){
        context.save();
        context.translate(this.position._x, this.position._y);
        context.rotate(this.angle);
        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 7);
        context.lineTo(10, 0);
        context.stroke();
        context.restore();

        if(this.position._x > width){
            this.position._x = 0
        }
    
        if(this.position._x < 0){
            this.position._x = width
        }
    
        if(this.position._y > height){
            this.position._y = 0
        }
    
        if(this.position._y < 0){
            this.position._y = height
        }
    }

    initControls(thrust, left, right, boosting, shooting){
        document.body.addEventListener("keydown", e => {
            switch(e.keyCode) {
                case thrust:
                    this.thrusting = true;
                    break;
        
                case left: 
                this.turningLeft = true;
                break;
        
                case right: 
                    this.turningRight = true;
                    break;

                case boosting:
                    this.boosting = true;
                    break;

                case shooting:
                    this.shooting = true;
                    break;              
            }
        });
        
        document.body.addEventListener("keyup", e => {
            switch(e.keyCode) {
                case thrust:
                    this.thrusting = false;
                    break;
        
                case left: 
                    this.turningLeft = false;
                    break;
        
                case right: 
                    this.turningRight = false;
                    break;
                
                case boosting:
                    this.boosting = false;
                    break;
                
                case shooting:
                    this.shooting = false;
                    break;  
            }
        });
        
    }

    accelerate(accel){
        super.accelerate(accel)
    }

    updateThrust(value){
        this.thrust.setLength(value);
    }


    updateShip(){
        super.update()

        if(this.turningLeft){
            this.angle -= 0.07;
        };
        if(this.turningRight){
            this.angle += 0.07;
        };
        if(this.thrusting){
            this.thrust.setLength(this.thrustingLength);
        } else {
            this.thrust.setLength(0);
        };

        if(this.boosting && this.thrusting){
            this.thrust.setLength(this.thrustingLength * 2.5)
            console.log(this.thrustingLength);
        }; 
        // else {
        // //     this.thrust.setLength(0);
        // // };

        if(this.shooting){
            console.log("shooting");
            this.shoot(this.position._x, this.position._y);
        }

        this.thrust.setAngle(this.angle);
        this.accelerate(this.thrust);
    }
}