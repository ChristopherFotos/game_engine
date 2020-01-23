//boundTo will be the Prop object that this control pertains to. Behavior will be a function that calls methods of the Control object's boundTo. e.g.:
// function behaviorFunction () {
//     this.boundTo.someMethod(); 
// }  

class Control {
    constructor(keycode, listenerType, boundTo, behavior, toggle){
        this.boundTo = boundTo;
        this.behavior = behavior;
        this.listenerType;
        this.firing = false;
        this.keycode = keycode;
        this.toggle = toggle;
        this.init();
    }

    init(){
        document.body.addEventListener(this.listenerType, e => {
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