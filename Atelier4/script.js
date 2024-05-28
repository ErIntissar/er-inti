$(document).ready(function() {y
    var display = $('#result');
    var currentInput = '';
    var operator = null;
    var previousInput = '';

    function updateDisplay(value) {
        display.val(value);
    }

    $('.number').click(function() {
        currentInput += $(this).text();
        updateDisplay(currentInput);
    });

    $('.operator').click(function() {
        var text = $(this).text();

        if (text === 'CE') {
            currentInput = '';
            updateDisplay(currentInput);
        } else if (text === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay(currentInput);
        } else if (text === '=') {
            if (operator && previousInput !== '' && currentInput !== '') {
                var result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                updateDisplay(result);
                currentInput = result;
                previousInput = '';
                operator = null;
            }
        } else {
            if (currentInput !== '') {
                if (previousInput === '') {
                    previousInput = currentInput;
                } else {
                    previousInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                }
                currentInput = '';
                operator = text;
                updateDisplay(previousInput);
            }
        }
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});