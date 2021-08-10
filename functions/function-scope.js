
// Global Scope (convertFahrenheitToCelsius, value)
    // Local Scope (fahrenheit, celsius)
        // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}
let value = convertFahrenheitToCelsius(68)
console.log(value)