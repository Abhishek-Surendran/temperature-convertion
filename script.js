document.getElementById('convertButton').addEventListener('click', function() {
    
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    
    let result;
    if (inputUnit === outputUnit) {
        result = inputTemp;
    } else {
        if (inputUnit === 'Celsius') {
            if (outputUnit === 'Fahrenheit') {
                result = (inputTemp * 9/5) + 32;
            } else if (outputUnit === 'Kelvin') {
                result = inputTemp + 273.15;
            }
        } else if (inputUnit === 'Fahrenheit') {
            if (outputUnit === 'Celsius') {
                result = (inputTemp - 32) * 5/9;
            } else if (outputUnit === 'Kelvin') {
                result = (inputTemp - 32) * 5/9 + 273.15;
            }
        } else if (inputUnit === 'Kelvin') {
            if (outputUnit === 'Celsius') {
                result = inputTemp - 273.15;
            } else if (outputUnit === 'Fahrenheit') {
                result = (inputTemp - 273.15) * 9/5 + 32;
            }
        }
    }

    
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
});
