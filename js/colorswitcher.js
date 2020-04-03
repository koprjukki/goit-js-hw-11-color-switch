import refs from './refs.js';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function startGenerateOnClick() {
    refs.startBtn.disabled = 'true'

    refs.colorGenerator = setInterval(() => {
        const colorRandomaizer = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[colorRandomaizer];
    }, 1000);
}

function stopGenerateOnClick() {
    clearInterval(refs.colorGenerator);
    refs.startBtn.removeAttribute('disabled');
}

refs.startBtn.addEventListener("click", startGenerateOnClick);
refs.stopBtn.addEventListener("click", stopGenerateOnClick);