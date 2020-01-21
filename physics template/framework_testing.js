const scene  = new Scene("canvas", window.innerWidth, window.innerHeight);
startScene(scene);

let a  = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 400,
        y: 600,
        strokeColor: 'blue',
        stroke: true,
        accelMag: 0.2,
        speed: 3,
        direction: 500,
        friction: 0.97,
        movement: 'default',
        collision: 'edgeBounce',
        // collisionArray:
    }
)

let b = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 100,
        y: 200,
        strokeColor: 'green',
        stroke: true,
        accelMag: 0.2,
        speed: 3,
        direction: 1,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        // collisionArray:
    }
)

let c = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 500,
        y: 200,
        strokeColor: 'green',
        stroke: true,
        accelMag: 0.2,
        speed: 3,
        direction: 2.74,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        // collisionArray:
    }
)

let d = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 400,
        y: 800,
        strokeColor: 'red',
        stroke: true,
        accelMag: 0.2,
        speed: 6,
        direction: -2.4,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        // collisionArray:
    }
)

let e = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 600,
        y: 650,
        strokeColor: 'purple',
        stroke: true,
        accelMag: 0.2,
        speed: 6,
        direction: -2.8,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        // collisionArray:
    }
)

let f = scene.add(
    scene,
    {
        shape: 'rectangle',
        width: 100,
        height: 100,
        x: 620,
        y: 130,
        strokeColor: 'purple',
        stroke: true,
        accelMag: 0.2,
        speed: 3,
        direction: 2.8,
        movement: 'default',
        friction: 0.97,
        collision: 'edgeBounce',
        // collisionArray:
    }
)


