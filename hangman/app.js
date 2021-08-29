const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 2)

puzzleEl.textContent = game1.puzzle // puzzleEl initial text value should be whatever we placed as a puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
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
    if (e.target.readyState === 4) { // if status of readyState equals 4, execute the following
        const data = JSON.parse(e.target.responseText)
        console.log(data) // prints the object: whatever text the io inputs as a word nedded to be guessed
    }
})

request.open('GET', 'http:puzzle.mead.io/puzzle')
request.send()