const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('') // set up the word instance property as an array of lower case letters (toLowerCase returns a string, on which we can use split())
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [] // set up another instance property to store guessed letters
}
Hangman.prototype.getPuzzle = function() {
    let puzzle = ['c'] // puzzle is an empty string at first: into empty array we type our guess and terminal prints the output
    
    this.word.forEach((letter) => { // lopping over each letter in word
        if (this.guessedLetters.includes(letter) || letter === ' ') { // if letter matches or includes a space, we add it to the array of puzzle
            puzzle += letter
        } else {
            puzzle += '*' // otherwise we display * for the letters that do not match
        }
    })
    return puzzle
}

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('Branko', 4)
console.log(game2.getPuzzle())