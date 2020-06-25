import Circle from './circle.js';
import Settings from './settings.js';
import { cursorX, cursorY } from './game.js';


export default class CircleManager {
    constructor() {
        let settings = new Settings();
        this.circleSpeed = settings.setSpeed();
        this.circleSize = settings.setSize();
    }

    spawnCircle(circles) {
        circles = [...circles, new Circle(canvas, this.circleSpeed, this.circleSize)];
        return circles;
    }

    shrinkCircles(circles, gameBarManager) {
        circles.forEach(circle => {
            if (cursorX < circle.positionX + circle.radius && cursorX > circle.positionX - circle.radius) {
                if (cursorY < circle.positionY + circle.radius && cursorY > circle.positionY - circle.radius) {
                    if (circle.radius <= 15) {
                        circles.splice(circles.indexOf(circle), 1);
                        gameBarManager.increaseScore();
                        gameBarManager.decreaseActiveCircles();
                    } else {
                        circle.shrink();
                    }
                }
            }
        });
    }

    moveCircles(circles, canvas) {
        circles.forEach(circle => {
            circle.move(canvas);
        });
    }
}