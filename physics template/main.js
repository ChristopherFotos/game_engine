const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let   width = canvas.width,
      height = canvas.height,
      context = canvas.getContext('2d'),

      circleProps = [],
      rectProps = [hit_5, hit_3, hit, hit_4, hit_6],
      pointProps = [],
      projectilesArray = [],

      ship = new Ship(width / 2, height / 2, 0, 0, 0, 0.965, 0, 0.55),
      ship_hb = new Hitbox(ship, 19, 18, 10, 10),

      block = new Block(200, 200, 100, 100),
      block_hb = new Hitbox(block, block.width, block.height, 0, 0) ;

      context.closePath();


ship.initControls(38, 37, 39, 90, 88);

function update() {
    context.clearRect(0,0,width,height);
    
    hit.draw();
    hit_3.draw();
    hit_2.update();
    hit_2.draw();
    hit_4.draw();
    hit_5.draw();
    ship.updateShip();
    ship.drawShip();
    block.draw();

    projectilesArray.forEach(projectile =>{
        projectile.update();
    })

    requestAnimationFrame(update);
}

update();



