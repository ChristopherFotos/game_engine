class Scene {
    constructor(canvas_ID, width, height){
        this.canvas = document.querySelector(canvas_ID);
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context = this.canvas.getContext('2d');
        //the following array holds props to be rendered. The update function loops through this array and calls update on each item.
        this.render = [];
        //hitboxes will go in the following 3 arrays (circleProps, rectProps, and pointProps)
        this.circleProps = [];
        this.rectProps = [];
        this.pointProps = [];
        this.isTrue = true;
    }

    add(scene, options){
        return new Prop(scene, options)
    }

    update(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // if(this.rectProps.length > 0){
            //     this.rectProps.forEach(prop => {
            //         prop.update()
            //     })
            // }
            if(this.pointProps.length > 0){
                this.rectProps.forEach(prop => {
                    prop.update()
                })
            }
            if(this.circleProps.length > 0){
                this.rectProps.forEach(prop => {
                    prop.update()
                })
            }

            this.render.forEach(body => {
                body.update();
            })
    }
}
