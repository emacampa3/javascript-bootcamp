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

// Callback pattern: one is always defined, never both and never none
getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


// Challenge
const countryCode = "SI"
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText) // parse the responseText to get back the array of objects
        const country = data.find((country) => country.alpha2Code === countryCode) // if those are equal, we store the match under 'country'
        console.log(country.name) // print the full country name
    } else if(e.target.readyState === 4) {
        console.log('Unable to fetch data')
    }
})

countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()
