const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * (9 / 5) + 32;
        result.textContent = temp + "°F";
        result.hidden = false;
    } else if (toCelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + "°C";
        result.hidden = false;
    } else {
        result.textContent = "Select a Unit!";
        result.hidden = false;
        return;
    }

    // Calculate the color gradient based on temperature
    var normalizedTemp = (temp - 15) / (100 - 15); // Normalize temperature between 15 and 100
    var blue = 255 * (1 - normalizedTemp);
    var red = 255 * normalizedTemp;

    // Set color based on the gradient
    result.style.color = 'rgb(' + red + ',0,' + blue + ')';
}