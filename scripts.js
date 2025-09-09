const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let currentExpression = '';
let newresult = 0
function handleButton(button) {
    const value = button.target.textContent;
    if (value === '=') {
        const res = currentExpression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")
        newresult = eval(res);
        display.textContent = newresult;
        currentExpression = newresult;
    } else if (value === 'AC') {
        currentExpression = '';
        display.textContent = '0';
    } else if (value === '%') {
        const res = currentExpression
        newresult = eval(res);
        newresult = newresult / 100;
        display.textContent = newresult;
        currentExpression = newresult;
    } else if (value === '+/-') {
        const res = currentExpression
        newresult = eval(res);
        currentExpression = -newresult;
        display.textContent = -newresult;
    } else if (display.textContent === '0') {
 display.textContent = value;
 currentExpression = value;
    }
    else {
        display.textContent += value;
        currentExpression += value;
    }
};
buttons.forEach(button => {
    button.addEventListener('click', handleButton);
})