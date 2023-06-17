 class svg {
        constructor(){
            this.shapeElement = ""
            this.textelement = ""
            
        }
        
        render() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'${this.shapeElement}${this.textelement}</svg>`
        }
        setshape(shape) {
            this.shapeElement = shape.render()
        }
        setText(message, textcolor) {
            if (message.length > 3) {
                throw new Error ("Max 3 Characters")
            }
            this.textelement = `<text x="150" y="125" text-anchor="middle" font-size="60" fill="${textcolor}">${message}</text>`
        }
    };
    

    module.exports = svg;