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

document.addEventListener('keydown', function(event) {
	if (event.key >= 0 && event.key <= 9) {
		appendValue(event.key);
	} else if (event.key === '.') {
		appendValue('.');
	} else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
		appendValue(event.key);
	} else if (event.key === 'Enter') {
		calculate();
	} else if (event.key === 'Escape') {
		clearDisplay();
	}else if (event.key === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    }
});
