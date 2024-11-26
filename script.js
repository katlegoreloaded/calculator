const display = document.getElementById("display");
const expression = display.value;

function backspace() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let expression = display.value; //idky it wont just use the global variable/constant i set up there tho
	let result;

	try {
		result = safeEvaluate(expression);
		display.value = result;
	} catch (error) {
		display.value = "Error";
	}
}
function baseLog10(){
	display.value += "Math.log10(";
}
function squareRoot() {
	display.value += "Math.sqrt(";
}

function vanillaLog(){
	display.value +="Math.log("
}

function power() {
	display.value += "**(";
}

function sin(){
	display.value += "Math.sin("
}

function cos(){
	display.value += "Math.cos("
}

function tan(){
	display.value +="Math.tan("
}
function exp(){
	display.value +="Math.exp("
}


function factorial(expression) {
	const n = Number(expression);

    if (isNaN(n) < 0);
    if (n === 0 || expression === 1) return 1;
	
	 return n * factorial(n - 1);

}

function fact(){
	display.value +="factorial(";
}


function safeEvaluate(expression) {
    try {
        return new Function(`return ${expression}`)();
    } catch (error) {
        return "Invalid Expression";
    }
}

function preventKeyboardInput(event) {
	event.preventDefault()};