// Calculator's Scripts

const display = document.querySelector('.screen-text')

let buffer = '0';
let runningTotal = 0;
let previousOperator = null;


document.querySelector('.calculator-container').addEventListener('click', (event) => {
    if (event.target.tagName !== "BUTTON") return;

    isNaN(parseInt(event.target.innerText)) ? handleSymbole(event.target.innerText) : handleNumber(event.target.innerText);

    render();
});

function render() {
    display.innerText = buffer;
}

function handleNumber(value) {
    if (buffer === '0') buffer = value;
    else buffer += value;
}

function handleSymbole(value) {
    switch (value) {
        case '+' :
        case '–' :
        case '×' :
        case '÷' :
            handleMath(value);
            break;
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) buffer = '0';
            else buffer = buffer.substring(0, buffer.length - 1);
            break;
        case '=' :
            if (previousOperator === null) return;
            calculation(parseInt(buffer));
            buffer = runningTotal
            runningTotal = 0
            break;
        default:
            break;
    }
}

function handleMath(value) {
    if (buffer === '0') return;
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) runningTotal = intBuffer;
    else calculation(intBuffer);

    previousOperator = value;
    buffer = '0';
}

function calculation(newValue) {
    if (previousOperator === '+') {(runningTotal += newValue)};
    if (previousOperator === '–') {(runningTotal -= newValue)};
    if (previousOperator === '×') {(runningTotal *= newValue)};
    if (previousOperator === '÷') {(runningTotal /= newValue)};
}