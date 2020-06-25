export default class Circle {
    constructor(canvas, circleSpeed, circleSize) {
        this.radius = Math.floor(Math.random() * 75) + circleSize;
        this.positionX = Math.floor(Math.random() * (canvas.width - 2 * this.radius)) + this.radius;
        this.positionY = Math.floor(Math.random() * (canvas.height - 2 * this.radius)) + this.radius;
        //používám canvas, kdyby okno během hraní měnilo velikost

        this.speedX = Math.floor(Math.random() * 5) + circleSpeed;
        this.speedY = Math.floor(Math.random() * 5) + circleSpeed;
        this.colors = ['#ff4E00', '#8ea604', '#f5bb00', '#541388', '#bf3100'];
        this.color = this.colors[Math.floor(Math.random() * 5)];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.positionX, this.positionY);
        ctx.arc(this.positionX, this.positionY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    shrink() {
        if (this.radius - 1 >= 15) this.radius -= 1;
    }

    move(canvas) {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        if (this.positionX >= canvas.width - this.radius || this.positionX <= this.radius) {
            this.speedX *= -1;
        } else if (this.positionY >= canvas.height - this.radius || this.positionY <= this.radius) {
            this.speedY *= -1;
        }
    }
}