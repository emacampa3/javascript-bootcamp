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

// HTTP (Hypertext Transfer Protocol)
// request: what do we want to do
// response: what was actually done

// making an HTTP request from JavaScript code
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if (e.target.readyState === 4 && e.target.status === 200) { // if status of readyState equals 4 or statusCode is 200, execute the following
        const data = JSON.parse(e.target.responseText)
        console.log(data) // prints the object: whatever text the io inputs as a word nedded to be guessed
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'http:puzzle.mead.io/puzzle?wordCount=3')
request.send()


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