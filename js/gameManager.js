import CircleManager from './circleManager.js';
import GameBarManager from './gameBarManager.js';
import { drawMenuBG } from './menuBackground';

export default class GameManager {

    constructor(ctx, menu, gameOver, gameBar) {
        this.circleManager = new CircleManager();
        this.gameBarManager = new GameBarManager(gameBar);
        this.menu = menu;
        this.gameOver = gameOver;
        this.ctx = ctx;
        this.framesPassed = 0;
        this.circles = [];
    }

    prepareGame(beginSpan) {
        this.menu.setAttribute('style', 'display: none');
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 50;
        beginSpan.textContent = '3';
        setTimeout(_ => beginSpan.textContent = '2', 1000);
        setTimeout(_ => beginSpan.textContent = '1', 2000);
        setTimeout(_ => beginSpan.textContent = '', 3000);
        this.startGame();
    }

    startGame() {
        setTimeout(_ => {
            this.circles = this.circleManager.spawnCircle(this.circles);
            this.loop();
        }, 3000);
    }

    stopGame() {
        this.circles.splice(0, this.circles.length);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.gameBarManager.hideBar();
        this.gameOver.setAttribute('style', 'display: flex');
        drawMenuBG();
        this.gameBarManager.gameOver();
    }

    loop() {
        this.framesPassed++;
        if (this.framesPassed % (80 * 3) == 0) {
            this.circles = this.circleManager.spawnCircle(this.circles);
            this.gameBarManager.increaseActiveCircles();
        }

        this.circleManager.shrinkCircles(this.circles, this.gameBarManager);
        this.circleManager.moveCircles(this.circles, canvas);
        this.drawGame();

        if (this.circles.length >= 5) {
            this.stopGame();
            return;
        }

        requestAnimationFrame(() => this.loop());
    }

    drawGame() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.circles.forEach(circle => {
            circle.draw(this.ctx);
        });
    }

}