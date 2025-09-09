const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let currentExpression = '';
let result = 0
function handleButton(button) {
    const value = button.target.textContent;
    if (value === '=') {  
        const res = currentExpression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")  
        result = eval(res);
        display.textContent = result;
        currentExpression = result;
    } else if (value === 'AC') {
        currentExpression = '';
        display.textContent = '0';
    } else if (value === '%') {
        const res = currentExpression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")
        result = eval(res);
        result = result / 100;
        display.textContent = result;
        currentExpression = result;
    } else if (value === '+/-') {  
        const res = currentExpression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")      
        result = eval(res);
        currentExpression = -result;
        display.textContent = result;
    } else
    {
        display.textContent += value;
        currentExpression += value;
    }
};
buttons.forEach(button => {
    button.addEventListener('click', handleButton);
})