const scene  = new Scene("canvas", window.innerWidth, window.innerHeight);
startScene(scene);

let colors = ['#E4572E','#16BAC5','#5FBFF9','FFEEDB','73FBD3'];

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

document.body.addEventListener('keydown', e => {

        scene.add(
        scene,
        {
            shape: 'rectangle',
            width: 20,
            height: 20,
            x: _mx,
            y: _my - 70,
            strokeColor: 'gray',
            fill: true,
            fillColor: colors[Math.floor(utils.randomRange(0, 4))],
            accelMag: 0.02,
            speed: 9    ,
            solid: true,
            direction: dir(e.keyCode),
            movement: 'default',
            friction: 0.98,
            
            mass: 0.2,
            elasticity: 0.5,  
        }
    )
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

