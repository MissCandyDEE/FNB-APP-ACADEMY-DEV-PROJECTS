// This is the "Brain" of your calculator
const display = document.querySelector('.display'); // Make sure your HTML has a class="display"
let currentInput = "";

function updateDisplay(value) {
    if (value === 'clear') {
        currentInput = "";
        display.innerText = "0";
    } else if (value === 'calculate') {
        try {
            // This does the actual math
            currentInput = eval(currentInput).toString();
            display.innerText = currentInput;
        } catch {
            display.innerText = "Error";
            currentInput = "";
        }
    } else {
        currentInput += value;
        display.innerText = currentInput;
    }
}
