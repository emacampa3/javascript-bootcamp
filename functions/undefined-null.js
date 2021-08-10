// Undefined: used in JavaScript in the absence of value

// Without defining the variable name, it is automatically assigned value 'undefined'
let name
if (name === undefined) {
    console.log('Please provide a name.')
} else {
    console.log(name)
}
console.log(name) // Terminal prints: Please provide a name.

// Undefined is also a result for function arguments that aren't provided