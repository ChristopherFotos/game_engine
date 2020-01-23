class Projectile extends Particle{
    constructor(x, y, speed, direction, grav = 0, friction = 1){
        super(x, y, speed, direction, grav, friction);
        this.acceleration = new Vector(0, 0);
        this.acceleration.setLength(1.6)
        this.acceleration.setAngle(direction);
        this._y = y;
        this._x = x;
        this.velocity = new Vector(0,0);
        // this.velocity.setLength(speed); 
        // this.velocity.setAngle(direction);
        this.position.setX(x);
        this.position.setY(y);
        this.index = projectilesArray.length
    }

    draw(){
        context.beginPath();
        context.arc(this.position._x, this.position._y, 10, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();
        context.fillStyle = "black";
    }

    accelerate(){
        super.accelerate(this.acceleration)
    }

    update(){
        if(this.position._x > 0 && this.position._x < width && this.position){
            this.accelerate(this.acceleration)
            this.position.addTo(this.velocity);
            this.draw()
        }
    }
}

//make it so that projectile emitters can be bound to bodies? because in most use cases this is what designers will probably want to do