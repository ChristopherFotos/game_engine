function collisionFunction(){
    for (let i = 0; i < this.scene.rectProps.length; i++){
        if(utils.rectIntersect(this.scene.rectProps[i], this) && this.scene.rectProps[i] != this){

            if(this.solid){
            let player_bottom = this.position._y + this.height;
            let tiles_bottom = this.scene.rectProps[i].position._y + this.scene.rectProps[i].height;
            let player_right = this.position._x + this.width;
            let tiles_right = this.scene.rectProps[i].position._x + this.scene.rectProps[i].width;
            
            let b_collision = tiles_bottom - this.position._y;
            let t_collision = player_bottom - this.scene.rectProps[i].position._y;
            let l_collision = player_right - this.scene.rectProps[i].position._x;
            let r_collision = tiles_right - this.position._x;
                           
            if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision )
            {  
                
                    let _f = this.mass * this.velocity.getLength();
                    this.scene.rectProps[i].velocity._y += ((_f / this.scene.rectProps[i].mass) * (this.elasticity * this.scene.rectProps[i].elasticity))
                } 

            if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision)                        
            {
                
                    let _f = this.mass * this.velocity.getLength();
                    this.scene.rectProps[i].velocity._y -= ((_f / this.scene.rectProps[i].mass) * (this.elasticity * this.scene.rectProps[i].elasticity))

      
            }
            if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision)
            {
               
                    let _f = this.mass * this.velocity.getLength();
                    this.scene.rectProps[i].velocity._x += ((_f / this.scene.rectProps[i].mass) * (this.elasticity * this.scene.rectProps[i].elasticity))
                
 
            }

            if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision )
            {
                
                    let _f = this.mass * this.velocity.getLength();
                    this.scene.rectProps[i].velocity._x -= ((_f / this.scene.rectProps[i].mass) * (this.elasticity * this.scene.rectProps[i].elasticity))
                
  
            }
        } 
        
        this.colliding = true

      } else{this.colliding = false};

      

    }
}