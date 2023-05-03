class shapes {
    constructor(circle, triangle, square){
        this.shapecolor = ""
    }
};

class circle extends shapes {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.shapecolor}" />`;
      }
};
class triangle extends shapes{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`;
      }
};
class square extends shapes{
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.shapecolor}" />`;
      }

};


module.exports = shapes;