class Particle {
    constructor(x, y, speed, direction, grav=0, friction = 1){
       this.position = new Vector(x, y);
       this.velocity = new Vector(0,0);
       this.velocity.setLength(speed); 
       this.velocity.setAngle(direction);
       this.gravity = new Vector(0, grav);
       this.friction = friction
    }

    accelerate(accel){
        this.velocity.addTo(accel)
    }


    update(){
        this.velocity.multiplyBy(this.friction)
        this.position.addTo(this.velocity);
        this.velocity.addTo(this.gravity)
    }
}