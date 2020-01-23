player_bottom = hit_2._y + hit_2.height;
tiles_bottom = rectProps[i]._y + rectProps[i].height;
player_right = hit_2._x + hit_2.width;
tiles_right = rectProps[i]._x + rectProps[i].width;

b_collision = tiles_bottom - hit_2.get_y;
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
    ship.velocity.setY(ship.velocity.getY() * -1);
}
if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision )
{
    ship.velocity.setY(ship.velocity.getY() * -1);
}