
let btnSettings = document.querySelector('.btn-settings');
let btnInstructions = document.querySelector('.btn-instructions');
let allBtnsBack = document.querySelectorAll('.back');

let sections = document.querySelectorAll('section');
let menu = document.querySelector('.menu');
let instructions = document.querySelector('.instructions');
let settings = document.querySelector('.settings');

let difficultyDivs = document.querySelectorAll('.difficulty div');
let chosenDifficultyDiv = document.querySelector('.chosenDifficulty');
let difficulty = [
    document.querySelector('.easy'),
    document.querySelector('.normal'),
    document.querySelector('.hard'),
    document.querySelector('.hardcore')
];


btnInstructions.addEventListener('click', _ => {
    sections.forEach(section => {
        section.setAttribute('style', 'display: none');
    });
    instructions.setAttribute('style', 'display: flex');
})

btnSettings.addEventListener('click', _ => {
    sections.forEach(section => {
        section.setAttribute('style', 'display: none');
    });
    settings.setAttribute('style', 'display: flex');
})

allBtnsBack.forEach(btn => {
    btn.addEventListener('click', _ => {
        sections.forEach(section => {
            section.setAttribute('style', 'display: none');
        });
        menu.setAttribute('style', 'display: flex');
    })
});

difficulty.forEach(diff => {
    diff.addEventListener('click', _ => {
        difficultyDivs.forEach(div => {
            div.setAttribute('style', 'border: 0px');
            div.classList.remove('active');
        });
        diff.setAttribute('style', 'border: 3px solid #2a2b2e');
        diff.classList.add('active');
        chosenDiff = window.getComputedStyle(diff, ':before').getPropertyValue('content');
        formattedDiff = chosenDiff[1].toUpperCase() + chosenDiff.slice(2, -1);
        chosenDifficultyDiv.innerHTML = `Chosen difficulty: <b>${formattedDiff}</b>`;
    })
});

