const scene  = new Scene("canvas", window.innerWidth * 0.9, window.innerHeight * 0.87);
startScene(scene);

let colors = ['#E4572E','#16BAC5','#5FBFF9','FFEEDB','73FBD3'];

let _mx,
    _my;

document.body.addEventListener('mousemove', e => {
    _mx = e.pageX;
    _my = e.pageY
});

function dir(keyCode){
    switch(keyCode){
        case 65:
            return 15.75
            break;
        case 68:
            return 0
            break;
        case 87:
            return 4.7;
            break;
        case 83:
            return 1.5
    }
}

let ribbon = false;

document.body.addEventListener('keydown', e => {
    if(e.keyCode == 49){
        ribbon = false
    } else if(e.keyCode == 50) {
        ribbon = true
    }
})




document.body.addEventListener('keydown', e => {
    if(e.keyCode === 71){
    switch(scene.gravity){
    case true:
    scene.gravity = false
    break;
    case false: 
    scene.gravity = true
    break;
    }
    }
})

document.body.addEventListener('keydown', e => {
    if(!ribbon){scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 60,
        height: 60,
        x: _mx,
        y: _my - 250,
        strokeColor: 'gray',
        fill: true,
        fillColor: colors[Math.floor(utils.randomRange(0, 4))],
        accelMag: 0.02,
        speed: 10,
        solid: true,
        direction: dir(e.keyCode),
        movement: 'default',
        friction: 0.952,
        mass: 1,
        collision: 'edgeBounce',
        elasticity: 0.7,  
    }
)}
})
 

document.body.addEventListener('mousemove', e => {
        if(ribbon){
        let square = Math.random() * 20;
        scene.add(
        scene,
        {
            shape: 'rectangle',
            width: square,
            height: square,
            x: e.pageX,
            y: e.pageY - 250,
            strokeColor: 'gray',
            fill: true,
            fillColor: colors[Math.floor(utils.randomRange(0, 4))],
            accelMag: 0.025,
            speed: 0.15,
            solid: false,
            direction: Math.random() * 100,
            movement: 'default',
            friction: 0.965,
            collision: 'edgeBounce',
            mass: 5,
            elasticity: 0.85,  
        }
    )}
})



