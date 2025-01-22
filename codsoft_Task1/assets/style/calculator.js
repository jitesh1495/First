// Get the screen element
const screen = document.getElementById("screen");

// Function to append value to the display
function appendValue(value) {
    screen.value += value;
}

// Function to clear the display
function clearScreen() {
    screen.value = '';
}

// Function to evaluate the expression
function calculate() {
    // Parse the input string
    const expression = screen.value;
    let result = 0;

    // Determine the operation
    if (expression.includes('+')) {
        const numbers = expression.split('+');
        result = Number(numbers[0]) + Number(numbers[1]);
    } else if (expression.includes('-')) {
        const numbers = expression.split('-');
        result = Number(numbers[0]) - Number(numbers[1]);
    } else if (expression.includes('*')) {
        const numbers = expression.split('*');
        result = Number(numbers[0]) * Number(numbers[1]);
    } else if (expression.includes('/')) {
        const numbers = expression.split('/');
        if (Number(numbers[1]) === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        result = Number(numbers[0]) / Number(numbers[1]);
    } else {
        alert("Invalid Expression!");
        return;
    }

    // Display the result
    screen.value = result;
}
