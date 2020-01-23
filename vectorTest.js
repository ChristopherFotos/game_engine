const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 1.5;
let   width = canvas.width,
      height = canvas.height,
      context = canvas.getContext('2d');

let span = document.getElementById('vel');


let _1 = new Particle(100, 100, 2, 0, 0, 1, 0.00005);
let _2 = new Particle(500, 100, 2, 0, 0, 1, 0.00005);


let rectProps = [_1, _2];

let velocity;

function update() {
    context.clearRect(0,0,width,height);

    context.beginPath();
    context.rect(_1.position._x, _1.position._y, 100, 100);
    context.strokeStyle = 'black';
    context.fillStyle = 'red';
    context.fill();
    context.stroke();    
    context.closePath();

    context.beginPath();
    context.rect(_2.position._x, _2.position._y, 100, 100);
    context.strokeStyle = 'black';
    context.fillStyle = 'blue';
    context.fill();
    context.stroke();    
    context.closePath();

    if(_1.position._x < 0 || 
        _1.position._x + 100 > width){
            
            _1.acceleration.multiplyBy(-1)
            _1.velocity._x *= -1;
    };

    if(_2.position._x < 0 || 
        _2.position._x + 100 > width){
            
            _2.acceleration.multiplyBy(-1)
            _2.velocity._x *= -1;
    };

    // if(_1.position._y < 0 || 
    //     _1.position._y + 100 > height){
    //         // _1.acceleration._y * -1;
    //         _1.velocity._y *= -1;
    // }

    collide(_1)
    collide(_2)
    _1.update();
    _2.update();
    velocity = _1.velocity.getLength();
    span.innerHTML = `${velocity} <br>
    ${_1.acceleration.getLength()}`; 
    requestAnimationFrame(update);
}

update();


    