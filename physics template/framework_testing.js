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
        accelMag: 0.0002,
        speed: 3,
        direction: 120,
        // movement: 'default',
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
        accelMag: 0,
        speed: 0,
        direction: 400,
        // movement: 'default',
        collision: 'edgeBounce',
        // collisionArray:
    }
)

scene.rectProps.unshift(a, b)

// let c  = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 350,
//         y: 700,
//         strokeColor: 'red',
//         stroke: true,
//         accelMag: 0.0002,
//         speed: 3,
//         direction: 20,
//         movement: 'default',
//         collision: 'edgeBounce',
//         // collisionArray:
//     }
// )

// let d  = scene.add(
//     scene,
//     {
//         shape: 'rectangle',
//         width: 100,
//         height: 100,
//         x: 300,
//         y: 600,
//         strokeColor: 'green',
//         stroke: true,
//         accelMag: 0.0002,
//         speed: 3,
//         direction: 90,
//         movement: 'default',
//         collision: 'edgeBounce',
//         // collisionArray:
//     }
// )

scene.rectProps.unshift(a, b)


let display = document.getElementById('a');
function go(){
    let b = a.velocity.getAngle(),
        c = a.acceleration.getAngle(),
        d = a.acceleration.getLength(),
        e = a.velocity.getLength();

    display.innerHTML = `velocity angle: ${b} <br>
    acceleration angle: ${c} <br>
    velocity length: ${e} <br>
    acceleration length: ${d} <br>
    velocity x: ${a.velocity._x} <br>
    velocity y: ${a.velocity._y} <br>`;

    requestAnimationFrame(go);
}

go();