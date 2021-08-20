/* examples of functions that do not support shorthand sytax */
const add = function() {
    return arguments[0] + arguments[1]
}

console.log(add(11,22,33,44))


const car = {
    color: 'red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())