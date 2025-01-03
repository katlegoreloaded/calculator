const display = document.getElementById("display");
const expression = display.value;

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = display.value;
    let result;

    try {
       
        const safeExpression = expression.
		replace(/sqrt\(/g, 'Math.sqrt(')
		.replace(/cos\(/g, 'Math.cos(')
		.replace(/sin\(/g, 'Math.sin(')
		.replace(/tan\(/g,'Math.tan(')
		.replace(/exp\(/g, 'Math.exp(')
		.replace(/log10\(/g, 'Math.log10(')
		.replace(/log\(/g,'Math.log');

        
        result = new Function(`return ${safeExpression}`)();

        
        display.value = result;
    } catch (error) {
      
        display.value = "Error";
    }
}

function baseLog10() {
    display.value += "log10(";
}

function squareRoot(expression) {
    const n = Number(expression);
    if (isNaN(n)) {
        return "Error"; 
    }
    return Math.sqrt(n);
}

function root() {
    const input = display.value; 
    const ans = squareRoot(input); 
    display.value = ans;
}


function vanillaLog() {
    display.value += "log(";
}

function power() {
    display.value += "**(";
}

function sin() {
    display.value += "sin(";
}

function cos() {
    display.value += "cos(";
}

function tan() {
    display.value += "tan(";
}

function exp() {
    display.value += "exp(";
}

function factorial(expression) {
    const n = Number(expression);

    if (isNaN(n) || n < 0) throw new Error("Invalid Input");
    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);
}

function fact() {
    const input = display.value; 
    const ans = factorial(input); 
    display.value = ans;
}

// Prevent direct keyboard input in the display
function preventKeyboardInput(event) {
    event.preventDefault();
}
