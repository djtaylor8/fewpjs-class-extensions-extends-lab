class Polygon {
    constructor(integers) {
        this.sides = integers;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];

        if (a + b <= c || a + c <= b || b + c <= a) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
       return this.sides.every((val, i) => val === this.sides[0])
    }

    get area() {
        if (this.isValid) {
          return this.sides[0] ** 2
        } else {
            throw new Error('Sorry, this is not a valid square')
        }
    }
}