import Circle from './circle.js';

export const drawMenuBG = _ => {
    let backgroundCircles = [];
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    for (let i = 0; i < 50; i++) {
        backgroundCircles[i] = new Circle(canvas, 0, 30);
        backgroundCircles[i].draw(ctx);
    }
}

window.onload = drawMenuBG;

