const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 2)

puzzleEl.textContent = game1.puzzle // puzzleEl initial text value should be whatever we placed as a puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode) // prints an actual letter to the console not just a character code
    game1.makeGuess(guess) 
    puzzleEl.textContent = game1.puzzle// displays the puzzle
    guessesEl.textContent = game1.statusMessage
})


// Callback pattern Country: one is always defined, never both and never none
getCountry('SI', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})

// Promise pattern Country: 
getCountry('SI').then((country) => {
    console.log(country.name)
}, (error) => {
    console.log(`Error: ${error}`)
})


// Promise pattern Puzzle
getPuzzle().then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(`Error: ${error}`)
})