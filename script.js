let result = document.getElementById('result');

function appendValue(value) {
	result.innerText += value;
}

function clearDisplay() {
	result.innerText = '';
}

function calculate() {
	try {
		result.innerText = eval(result.innerText);
	} catch (error) {
		result.innerText = 'Error';
	}
}
