let currentInput = '';
let display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
    currentInput += operator;
    display.innerText = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '0';
    display.innerText = currentInput;
}

// Function to toggle positive/negative sign
function toggleSign() {
    if (currentInput !== '0') {
        if (currentInput.startsWith('-')) {
            currentInput = currentInput.substring(1);
        } else {
            currentInput = '-' + currentInput;
        }
        display.innerText = currentInput;
    }
}

// Function to perform calculation
function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the expression
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}