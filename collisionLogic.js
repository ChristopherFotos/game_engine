function collide(shape){

    rectProps.forEach(prop => {
        if(shape != prop && utils.rectIntersect(shape, prop)){
        shape_bottom = shape._y + shape.height;
        opponent_bottom = prop.position._y + prop.height;
        shape_right = shape.position_x + shape.width;
        opponent_right = prop.position._x + prop.width;

        b_collision = opponent_bottom - shape.get_y;
        t_collision = shape_bottom - prop.position._y;
        l_collision = shape_right - prop.position._x;
        r_collision = opponent_right - shape.position._x;

        if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision )
        {                           
            shape.velocity.setY(shape.velocity.getY() * -1);
            console.log("top")
        }
        if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision)                        
        {
            shape.velocity.setY(shape.velocity.getY() * -1);
            console.log("bottom")
        }
        if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision)
        {
            shape.velocity.setY(shape.velocity.getY() * -1);
            console.log("left")
        }
        if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision )
        {
            shape.velocity.setY(shape.velocity.getY() * -1);
            console.log("right")
        }
    }})    
}

