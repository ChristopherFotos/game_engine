var hit = {
    width: 80,
    height: 80,
    _x: 100,
    _y: 100,

    draw: function(){
        context.beginPath();
        context.rect(this._x, this._y, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black';
    }

}

var hit_2 = {
    width: 20,
    height: 20,
    _x: 100,
    _y: 100,

    draw: function(){
        context.beginPath();
        context.rect(ship.position._x - 10, ship.position._y - 10, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        // context.strokeStyle = 'black';
    },

    update: function(){
        this._x = ship.position._x; 
        this._y = ship.position._y;
        //in the following loop I'm going to have to prepend every instance of *props this 'scene.'. But that means that the user can only 
        //call their scene 'scene,' which will limit them to one scene per document. This is not good enough. 
        // 
        for (let i = 0; i < rectProps.length; i++){
            if(utils.rectIntersect(rectProps[i], hit_2)){
                player_bottom = hit_2._y + hit_2.height;
                tiles_bottom = rectProps[i]._y + rectProps[i].height;
                player_right = hit_2._x + hit_2.width;
                tiles_right = rectProps[i]._x + rectProps[i].width;
                
                b_collision = tiles_bottom - hit_2._y;
                t_collision = player_bottom - rectProps[i]._y;
                l_collision = player_right - rectProps[i]._x;
                r_collision = tiles_right - hit_2._x;

                
                
                if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision )
                {       
                    ship.velocity.setY(ship.velocity.getY() * -1);
                }
                if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision)                        
                {
                    ship.velocity.setY(ship.velocity.getY() * -1);
                }
                if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision)
                {
                    console.log('left collision')
                    ship.velocity.setX(ship.velocity.getX() * -1);
                }
                if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision )
                {
                    console.log('right collision')
                    ship.velocity.setX(ship.velocity.getX() * -1);
                }
        } }
        ;

    }

    
}

var hit_3 = {
    width: 80,
    height: 80,
    _x: 500,
    _y: 500,

    draw: function(){
        context.beginPath();
        context.rect(this._x, this._y, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black';
    }

}

var hit_4 = {
    width: 80,
    height: 80,
    _x: 800,
    _y: 400,

    draw: function(){
        context.beginPath();
        context.rect(this._x, this._y, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black';
    }

}

var hit_5 = {
    width: 80,
    height: 80,
    _x: 1000,
    _y: 300,

    draw: function(){
        context.beginPath();
        context.rect(this._x, this._y, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black';
    }

}

var hit_6 = {
    width: 80,
    height: 80,
    _x: 3000,
    _y: 3000,

    draw: function(){
        context.beginPath();
        context.rect(this._x, this._y, this.width, this.height);
        context.strokeStyle = 'red';
        context.stroke();
        context.strokeStyle = 'black';
    }
}