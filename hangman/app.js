const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 2)

puzzleEl.textContent = game1.getPuzzle() // puzzleEl initial text value should be whatever we placed as a puzzle
guessesEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode) // prints an actual letter to the console not just a character code
    game1.makeGuess(guess) 
    puzzleEl.textContent = game1.getPuzzle() // displays the puzzle
    guessesEl.textContent = game1.remainingGuesses // displays remaining guesses
})