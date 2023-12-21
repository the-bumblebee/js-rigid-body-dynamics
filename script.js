const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WIDTH = canvas.getAttribute("width");
const HEIGHT = canvas.getAttribute("height");

class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Ball {

    constructor(position, radius, color="green") {
        this.position = position;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0 , 2 * Math.PI);
        ctx.fill();
    }
}

let ball = new Ball(new Vector(WIDTH / 2, HEIGHT / 2), 30);
ball.draw();