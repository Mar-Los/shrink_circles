let scoreSpan = document.querySelector('.score span');
let activeCirclesSpan = document.querySelector('.activeCircles span');

let gameOverSpan = document.querySelector('.gameOver span');

export default class GameBarManager {
    constructor(gameBar) {
        this.gameBar = gameBar;

        this.score = 0;
        this.activeCircles = 1;
        this.timeToSpawn = 3;
        this.shrinkSpeed = 1;
        this.spawnSpeed = 2;

        this.gameBar.setAttribute('style', 'display: flex');
    }

    manageBar() {
        this.increaseScore();
    }

    increaseActiveCircles() {
        this.activeCircles++;
        activeCirclesSpan.textContent = this.activeCircles;
    }

    decreaseActiveCircles() {
        this.activeCircles--;
        activeCirclesSpan.textContent = this.activeCircles;
    }

    increaseScore() {
        this.score++;
        scoreSpan.textContent = this.score;
    }

    hideBar() {
        this.gameBar.setAttribute('style', 'display: none');
    }

    gameOver() {
        gameOverSpan.textContent = this.score;
    }
}
