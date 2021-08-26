const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('') // set up the word instance property as an array of lower case letters (toLowerCase returns a string, on which we can use split())
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [] // set up another instance property to store guessed letters
}
Hangman.prototype.getPuzzle = function() {
    let puzzle = '' // puzzle is an empty string at first: into empty array we type our guess and terminal prints the output
    
    this.word.forEach((letter) => { // lopping over each letter in word
        if (this.guessedLetters.includes(letter) || letter === ' ') { // if letter matches or includes a space, we add it to the array of puzzle
            puzzle += letter
        } else {
            puzzle += '*' // otherwise we display * for the letters that do not match
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess) { // creating a method for making a guess that accepts a character for guessing
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess) // looking at the array of guessed letters to see if guess is inside of the array (calling includes): ! reverses it: if there are no matches, run the following code
    const isBadGuess = !this.word.includes(guess) // does the word array includes the guess: if it's a bad guess (if the array does not include the guess), we get a value of true

    if (isUnique) { 
        this.guessedLetters.push // if the guess is correct, we add a letter to the guessedLetter 
    }

    if (isUnique && isBadGuess) { // decrement remaining guesses by one (only if guess is unique and false)
        this.remainingGuesses-- 
    }
}

const game1 = new Hangman('cat', 2)
game1.makeGuess('c')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

const game2 = new Hangman('Branko', 4)
game2.makeGuess('r')
console.log(game2.getPuzzle())
console.log(game2.remainingGuesses)