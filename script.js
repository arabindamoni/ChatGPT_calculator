// Define variables
let currentResult = '';
let currentOperator = '';
const resultElement = document.getElementById('result');

// Insert a number or a decimal point
function insertNumber(number) {
    currentResult += number;
    resultElement.value = currentResult;
}

// Insert an operator (+, -, *, /)
function insertOperator(operator) {
    if (currentResult !== '') {
        currentOperator = operator;
        currentResult += operator;
        resultElement.value = currentResult;
    }
}

// Clear the result
function clearResult() {
    currentResult = '';
    currentOperator = '';
    resultElement.value = '';
}

// Delete the last character
function deleteLast() {
    currentResult = currentResult.slice(0, -1);
    resultElement.value = currentResult;
}

// Calculate the result
function calculate() {
    if (currentOperator !== '' && currentResult !== '') {
        const result = eval(currentResult);
        currentResult = result.toString();
        currentOperator = '';
        resultElement.value = currentResult;
    }
}

// Listen for keyboard inputs
document.addEventListener('keydown', (event) => {
    const key = event.key;
    switch (key) {
        case 'Enter':
            calculate();
            break;
        case '.':
            insertOperator('.');
            break;
        case '/':
        case '*':
        case '+':
        case '-':
            insertOperator(key);
            break;
        case 'Delete':
            clearResult();
            break;
        case 'Backspace':
            deleteLast();
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            insertNumber(key);
            break;
    }
});


