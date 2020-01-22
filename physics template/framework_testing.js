const scene  = new Scene("canvas", window.innerWidth, window.innerHeight, true);
startScene(scene);

let a  = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 400,
        y: 300,
        strokeColor: 'blue',
        stroke: true,
        accelMag: 0.02,
        speed: 5,
        direction: 0,
        friction: 0.98,
        movement: 'default',
        collision: 'edgeBounce',
        mass: 2,
        elasticity: 0.85,
        // collisionArray:
    }
)

let b = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 620,
        y: 300,
        strokeColor: 'green',
        stroke: true,
        accelMag: 0.02,
        speed: 10,
        direction: 15.5,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        mass: 2,
        elasticity: 0.85,
        // collisionArray:
    }
)

console.log(a.velocity._x)
console.log(b.velocity._x)


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


