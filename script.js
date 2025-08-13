document.getElementById('convertBtn').addEventListener('click', convertTemperature);
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');   
    if (!isValidNumber(tempInput)) {
        resultDiv.classList.add('error');
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }
    const temp = parseFloat(tempInput);
    resultDiv.classList.remove('error');
    let celsius, fahrenheit, kelvin;

    if (unitSelect === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        resultDiv.innerHTML = `${temp.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F<br>${temp.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (unitSelect === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
        kelvin = celsius + 273.15;
        resultDiv.innerHTML = `${temp.toFixed(2)}°F = ${celsius.toFixed(2)}°C<br>${temp.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (unitSelect === 'kelvin') {
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        resultDiv.innerHTML = `${temp.toFixed(2)}K = ${celsius.toFixed(2)}°C<br>${temp.toFixed(2)}K = ${fahrenheit.toFixed(2)}°F`;
    }
}
function isValidNumber(input) {
    return !isNaN(input) && input.trim() !== '';
}