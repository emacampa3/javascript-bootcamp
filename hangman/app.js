const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode) // prints an actual letter to the console not just a character code
    game1.makeGuess(guess) 
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle // displays the puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// Fetch API for promise pattern Puzzle: abstracting the function getPuzzle behind the scenes
getPuzzle().then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})