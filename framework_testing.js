const scene  = new Scene("canvas", window.innerWidth, window.innerHeight);
startScene(scene);

// let blue  = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 320,
//         y: 300,
//         strokeColor: 'blue',
//         stroke: true,
//         accelMag: 0.0,
//         speed: 2,
//         direction: 4.7,
//         friction: 0.98,
//         movement: 'default',
//         collision: 'edgeBounce',
//         mass: 1,
//         elasticity: 0.4,
//         // collisionArray:
//     }
// )

// let green = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 320,
//         y: 350,
//         strokeColor: 'green',
//         stroke: true,
//         accelMag: 0,
//         speed: 1,
//         direction: 4.7,
//         movement: 'default',
//         friction: 0.98,
//         collision: 'edgeBounce',
//         mass: 1,
//         elasticity: 0.7,
//         // collisionArray:
//     }
// )

// let purple = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 20,
//         y: scene.height - 210,
//         strokeColor: 'purple',
//         stroke: true,
//         accelMag: 0,
//         speed: 10,
//         direction: 0,
//         movement: 'default',
//         friction: 0.98,
//         collision: 'edgeBounce',
//         mass: 2,
//         elasticity: 0.8,
//         // collisionArray:
//     }
// )


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
            y: _my - 50,
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

// let c = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 450,
//         y: scene.height - 400,
//         strokeColor: 'purple',
//         stroke: true,
//         accelMag: 0.02,
//         speed: 15,
//         direction: 4.7,
//         movement: 'default',
//         friction: 0.97,
//         collision: 'edgeBounce',
//         mass: 0,
//         elasticity: 0.8,
//         // collisionArray:
//     }
// );

// colors = ['#E4572E', '#EDAE49', '#00798C', '#7FB069']

// for(let i =0; i < 800; i++){
//     let square = Math.random() * 150;
//     scene.add(
//         scene,
//         {
//             shape: 'rectangle',
//             width: square,
//             height: square,
//             x: (Math.random() * (scene.width - (square - 20))) ,
//             y: (Math.random() * (scene.height - (square+20))) ,
//             strokeColor: '#2E282A',
//             stroke: true,
//             fill: true,
//             fillColor: colors[utils.randomInt(0, 4)],
//             accelMag: 0.02,
//             speed: 3,
//             direction: (Math.random() * 100),
//             movement: 'default',
//             friction: 0.999,
//             collision: 'edgeBounce',
//             mass: 0.6,
//             elasticity: 0.9,
//             // collisionArray:
//         }
//     )
// }

// scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 5,
//         height: 5,
//         x: (Math.random() * 100),
//         y: (Math.random() * 100),
//         strokeColor: '2E282A',
//         stroke: true,
//         fill: true,
//         fillColor: utils.randomInt(0, 4),
//         accelMag: 0.02,
//         speed: 7,
//         direction: (Math.random() * 100),
//         movement: 'default',
//         friction: 0.97,
//         collision: 'edgeBounce',
//         mass: 0.4,
//         elasticity: 0.8,
//         // collisionArray:
//     }
// )


////////////////////////////////////////////////////


// let d = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 600,
//         y: scene.height - 275,
//         strokeColor: 'red',
//         stroke: true,
//         accelMag: 0.2,
//         speed: 12,
//         direction: -2.4,
//         movement: 'default',
//         friction: 0.97,
//         collision: 'edgeBounce',
//         elasticity: 0.7,
//         mass: 1
//         // collisionArray:
//     }
// )

// let e = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 600,
//         y: 650,
//         strokeColor: 'purple',
//         stroke: true,
//         accelMag: 0.2,
//         speed: 6,
//         direction: -2.8,
//         movement: 'default',
//         friction: 0.85,
//         collision: 'edgeBounce',
//         mass: 3
//         // collisionArray:
//     }
// )

// let f = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 620,
//         y: 130,
//         strokeColor: 'purple',
//         stroke: true,
//         accelMag: 0.2,
//         speed: 3,
//         direction: 2.8,
//         movement: 'default',
//         friction: 0.85,
//         collision: 'edgeBounce',
//         mass: 3
//         // collisionArray:
//     }
// )


