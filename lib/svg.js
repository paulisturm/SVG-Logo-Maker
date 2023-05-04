 class svg {
        constructor(shape,text){
            this.shape = shape
            this.text = text
        }
        render() {
            return `${this.shape.render()}, ${this.text}`
        }
    };