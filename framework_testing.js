const scene  = new Scene("canvas", window.innerWidth * 1.5, window.innerHeight * 1.5);
startScene(scene);

let colors = ['#E4572E','#16BAC5','#5FBFF9','#FFEEDB','#73FBD3'];

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

function hurt(){
    
    this.render = false

        // for(let i = 0; i < 4; i++){
            
        //     let _width = this.width
        //     let _height = this.height
        //     let _x = this.position._x
        //     let _y = this.position._y
        //     scene.add(
        //     scene,
        //         {
        //             shape: 'rectangle',
        //             width: _width * 0.20,
        //             height: _height * 0.20,
        //             x: _x,
        //             y: _y,
        //             strokeColor: 'gray',
        //             fill: true,
        //             fillColor: colors[Math.floor(utils.randomRange(0, 4))],
        //             accelMag: 0,
        //             speed: 0,
        //             solid: true,
        //             direction: Math.random() * 100,
        //             movement: 'default',
        //             friction: 0.965,
        //             collision: 'edgeBounce',
        //             mass: 9,   
        //             elasticity: 1,
        //             nograv: true,
        //         }
        // )}
};

// function die(){
//     if(this.customProperties.health < 0){
//         console.log('death')
//         for(let i = 0; i < 4; i++){
//             this.scene.rectProps.pop(this)
//             let _width = this.width
//             let _height = this.height
//             let _x = this.position._x
//             let _y = this.position._y
//             scene.add(
//             scene,
//             {
//                 shape: 'rectangle',
//                 width: _width * 0.20,
//                 height: _height * 0.20,
//                 x: _x,
//                 y: _y,
//                 strokeColor: 'gray',
//                 fill: true,
//                 fillColor: colors[Math.floor(utils.randomRange(0, 4))],
//                 accelMag: 0,
//                 speed: 0,
//                 solid: true,
//                 direction: Math.random() * 100,
//                 movement: 'default',
//                 friction: 0.965,
//                 collision: 'edgeBounce',
//                 mass: 9,   
//                 elasticity: 1,
//                 nograv: true,
//             }
//         )}
//     }
// }

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
        speed: 12,
        solid: true,
        direction: dir(e.keyCode),
        movement: 'default',
        friction: 0.952,
        mass: 5,
        collision: 'edgeBounce',
        elasticity: 0.6,
        customProperties: {
            health: 5
        },
        collisionFunctions: [hurt],
    }
)}
})
 


document.body.addEventListener('mousemove', e => {
        if(ribbon){
        for(let i = 0; i < 5; i++){
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
            solid: true,
            direction: Math.random() * 100,
            movement: 'default',
            friction: 0.965,
            collision: 'edgeBounce',
            mass: 5,
            elasticity: 0.1,  
        }
    )}
   }
})

// let blocky_blocky = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 200,
//         height: 200,
//         x: 200,
//         y: 200,
//         strokeColor: 'gray',
//         fill: true,
//         fillColor: 'black',
//         accelMag: 0,
//         speed: 0,
//         solid: true,
//         direction: Math.random() * 100,
//         movement: 'default',
//         friction: 0.965,
//         collision: 'edgeBounce',
//         mass: 999999,
//         elasticity: 1,
//         nograv: true,
//         customProperties: {
//             health: 5
//         },
//         customFunctions: [hurt, die]
//     }
// )

