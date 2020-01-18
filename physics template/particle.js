class Particle {
    constructor(x, y, speed, direction, grav=0, friction = 1, acceleration){
       this.position = new Vector(x, y);
       this.velocity = new Vector(0,0);
       this.velocity.setLength(speed); 
       this.velocity.setAngle(direction);
       this.gravity = new Vector(0, grav);
       this.friction = friction
       this.acceleration = new Vector(0,0);
       this.acceleration.setLength(acceleration);
       this.acceleration.setAngle(direction)
    }

    accelerate(){
        // this.velocity.addTo(this.acceleration);
        this.position.addTo(this.velocity)
    }

    bounce(){
        if(this.position._x < 0 || 
            this.position._x + this.width > width){
                this.acceleration._x * -1;
                this.velocity._x *= -1;
        };

        if(this.position._y < 0 || 
            this.position._y + this.height > height){
                this.acceleration._y * -1;
                this.velocity._y *= -1;
        }
    }

    update(){
        // this.velocity.multiplyBy(this.friction)
        this.velocity.addTo(this.acceleration);
        this.accelerate();
        // this.bounce();
        // this.velocity.addTo(this.gravity)

        


    }
}