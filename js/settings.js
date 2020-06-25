export default class Settings {
    constructor() {
        this.difficulty = document.querySelectorAll('.difficulty div');
        difficulty.forEach(diff => {
            if (diff.classList.contains('active')) {
                this.chosenDiff = diff.classList.item(0);
            }
        });
    }

    setSpeed() {
        let speed;
        switch (this.chosenDiff) {
            case 'easy':
                speed = 0;
                break;
            case 'normal':
                speed = 3;
                break;
            case 'hard':
                speed = 4;
                break;
            case 'hardcore':
                speed = 6;
                break;
        }
        return speed;
    }

    setSize() {
        let size;
        switch (this.chosenDiff) {
            case 'easy':
                size = 40;
                break;
            case 'normal':
                size = 55;
                break;
            case 'hard':
                size = 70;
                break;
            case 'hardcore':
                size = 90;
                break;
        }
        return size;
    }
}