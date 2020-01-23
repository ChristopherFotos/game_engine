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
        accelMag: 0.02,
        speed: 3,
        direction: 120,
        friction: 0.94,
        // movement: 'default',
        collision: 'edgeBounce',
        // collisionArray:
    }
)