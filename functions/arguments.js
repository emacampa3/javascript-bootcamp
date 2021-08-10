// Multiple arguments
let add = function (a, b) {
    return a + b
}
let result = add(10, 1)
console.log(result)


// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {  // score now has a default value of 0, if value is not provided
    return `Name: ${name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)  // no first argument
console.log(scoreText)


// Challenge: tip calculator
let getTip = function (total, tipPercent = 0.2) {
    let tip = total * tipPercent * 100
    return `A ${tipPercent}% tip on $${total} would be $${tip}.`
}
let tip = getTip(100, 0.2)
console.log(scoreText)


let name = 'Ema'
let age = 21
console.log(`Hey, my name is ${name}! I am ${age} years old.`)