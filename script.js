const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WIDTH = canvas.getAttribute("width");
const HEIGHT = canvas.getAttribute("height");
const dt = 0.01

class Ball {

    constructor(radius, v_r, v_v, v_a) {
        this.v_r = v_r;
        this.v_v = v_v;
        this.v_a = v_a;
        this.radius = radius;
        this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }

    update() {

        this.v_v.x += this.v_a.x * dt;
        this.v_v.y += this.v_a.y * dt;
        this.v_r.x += this.v_v.x * dt;
        this.v_r.y += this.v_v.y * dt;

        if (this.v_r.x < this.radius || this.v_r.x > WIDTH - this.radius) {
            this.v_v.x = -this.v_v.x;
        }

        if (this.v_r.y < this.radius || this.v_r.y > HEIGHT - this.radius) {
            this.v_v.y = -this.v_v.y;
        }

    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.v_r.x, this.v_r.y, this.radius, 0 , 2 * Math.PI);
        ctx.fill();
    }

}

let position = {x: WIDTH / 2, y: HEIGHT / 2};
let velocity = {x: 300, y: -400};
let accel = {x: 0, y: 1000};
let ball = new Ball(30, position, velocity, accel);
ball.draw();

setInterval(run_simulation, 1000 * dt);

function run_simulation() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ball.update();
    ball.draw();
}