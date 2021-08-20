/* two same functions */
const square = (num) => num * num /* shorthand syntax */

const squareLong = (num) => {
    return num * num
}
console.log(square(5))


const people = [{
    name: 'Ema',
    age: 21
}, {
    name: 'Branko',
    age: 22
}, {
    name: 'Barbara',
    age:26
}]

/* two same functions */
const under25 = people.filter(function (person) {
    return person.age < 25
})

const under25 = people.filter(() => person.age < 25) /* shorthand syntax */
console.log(under25)


// Challenge: in a given array find a person of age 22
const person = people.filter(() => person.age === 22)
console.log(person)

/* often if no arguments are used in a function, it can be replaced with the arrowhead function,
if the function only returns something, shorthand sytax can be used */