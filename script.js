let display = document.getElementById("display");


function backspace() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let expression = display.value;
	let result;

	try {
		result = safeEvaluate(expression);
		display.value = result;
	} catch (error) {
		display.value = "Error";
	}
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


// function factorial(expression)
// {
//     var rval=1;
//     for (var i = 2; i <= expression; i++)
//         rval = rval * i;
//     return rval;
// }

function safeEvaluate(expression) {
    try {
        return new Function(`return ${expression}`)();
    } catch (error) {
        return "Invalid Expression";
    }
}

function preventKeyboardInput(event) {
	event.preventDefault()};