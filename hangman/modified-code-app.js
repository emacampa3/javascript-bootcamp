// Callback pattern Country: one is always defined, never both and never none (version 1)
getCountry('SI', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})
// Promise pattern Country: (version 2)
getCountry('SI').then((country) => {
    console.log(country.name)
}, (error) => {
    console.log(`Error: ${error}`)
})
// Modified promise pattern Country using catch as error handler: (version 3)
getCountry('SI').then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// Promise chaining Location & Country: using information from one to make another
getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// Promise pattern getCurrentCountry using catch as error handler
getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})


/* -------------------------------------------------------------------------------------- */


// Fetch API: returns a promise
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status == 200) {
        return response.json() // promise chaining part 1
    } else {
        throw new Error('Unable to fetch the puzzle') // handling the error part 1
    }
}).then((data) => { // promise chaining part 2
    console.log(data.puzzle)
}).catch((error) => { // handling the error part 2
    console.log(error)
})


/* -------------------------------------------------------------------------------------- */


// Promise pattern Puzzle
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(`Error: ${error}`)
})
// Fetch API for promise pattern Puzzle: abstracting the function getPuzzle behind the scenes
getPuzzle().then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})