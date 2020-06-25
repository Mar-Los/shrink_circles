import GameManager from './gameManager.js';

const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let menu = document.querySelector('.menu');
let playBtn = document.querySelector('.play');
let beginSpan = document.querySelector('.begin');
let gameBar = document.querySelector('.gameBar');
let gameOver = document.querySelector('.gameOver');

let cursorX;
let cursorY;

window.addEventListener('mousemove', e => {
    cursorX = e.x;
    cursorY = e.y;
});

playBtn.onclick = _ => {
    let gameManager = new GameManager(ctx, menu, gameOver, gameBar);
    gameManager.prepareGame(beginSpan);
}

export { cursorX, cursorY };








