let name = '   Ema Čampa'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Include method
let password = 'abc123password0987'
console.log(password.includes('password'))

// Trim (removes white space)
console.log(name.trim())


// Challenge
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password') 
    // this is the same as using an if/else statement 
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123/0987654'))
console.log(isValidPassword('okljhpasswordlkdsn'))