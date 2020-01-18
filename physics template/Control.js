//boundTo will be the Prop object that this control pertains to. Behavior will be a function that calls methods of the Control object's boundTo. e.g.:
// function behaviorFunction () {
//     this.boundTo.someMethod(); 
// }  

class Control {
    constructor(keycode, boundTo, behavior){
        this.boundTo = boundTo;
        this.behavior = behavior;
        this.firing = false;
        this.keycode = keycode;
    }

    init(){
        document.body.addEventListener("keydown", e => {
            if(e.keyCode = this.keycode){
                this.firing = true;
            }
        })

        document.body.addEventListener("keyup", e => {
            if(e.keyCode){
                this.firing = false;
            }
        })
    }
}

//what about toggling? this implementation wouldn't support it. perhaps i could add a property called 'toggle,' then wrapping keyup logic in an if statement that makes sure toggle is false before it runs the code. 