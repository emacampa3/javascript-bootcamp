let num = 103.941

console.log(num.toFixed(2)) // shows only the desired number of decimal places

console.log(Math.round(num)) // rounding the number
console.log(Math.floor(num)) // rounds the number down
console.log(Math.ceil(num)) // rounds the number up

let randomNum = Math.random() // generates a number between 0 and 0.9999
console.log(randomNum)

// generating a random number between 10 and 20
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


// Challenge
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum === guess
}
console.log(makeGuess(1))