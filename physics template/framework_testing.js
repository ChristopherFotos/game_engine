const scene  = new Scene("canvas", window.innerWidth, window.innerHeight);
startScene(scene);

let a  = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 400,
        y: scene.height - 100,
        strokeColor: 'blue',
        stroke: true,
        accelMag: 0,
        speed: 0,
        direction: 500,
        friction: 0.97,
        movement: 'default',
        collision: 'edgeBounce',
        mass: 1,
        elasticity: 0.8,
        
        // collisionArray:
    }
)

let b = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 400,
        y: scene.height - 210,
        strokeColor: 'green',
        stroke: true,
        accelMag: 0,
        speed: 0,
        direction: 1,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        mass: 0.4,
        elasticity: 0.8,
        
        // collisionArray:
    }
)

let c = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 400,
        y: scene.height - 325,
        strokeColor: 'purple',
        stroke: true,
        accelMag: 0,
        speed: 0,
        direction: 2.74,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        mass: 0.4,
        elasticity: 0.8,
        // collisionArray:
    }
)

let d = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 600,
        y: scene.height - 275,
        strokeColor: 'red',
        stroke: true,
        accelMag: 0.2,
        speed: 12,
        direction: -2.4,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        elasticity: 0.7,
        mass: 1
        // collisionArray:
    }
)

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


