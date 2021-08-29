const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())


// Adder
const add = (a, b) => a + b // previous way of writing the same code

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2)) // 8
console.log(add10(20)) // 30

const add100 = createAdder(100)
console.log(add100(-99)) // 1


// Challenge:
const createTipper = (baseTip) => { // takes in the base tip (.15 for 15% tip)
    return (amount) => { // set createTipper to return a function that takes in the bill amount
        return baseTip * amount
    }
}
const tip20 = createTipper(.2)
const tip30 = createTipper(.3)

console.log(tip20(100))
console.log(tip30(100))