// Function: input (argument), code, output (return value)

// Convert Fahrenheit to Celsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}
let value = convertFahrenheitToCelsius(68)
console.log(value)