// we cannot reassign value inside 'const', while  it is possible if declared in 'let'
const isRaining = true
isRaining = false // not possible
console.log(isRaining)