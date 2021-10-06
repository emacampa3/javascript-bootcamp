const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('') // set up the word instance property as an array of lower case letters (toLowerCase returns a string, on which we can use split())
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [] // set up another instance property to store guessed letters
    this.status = 'playing' // set up new status property with initial value of 'playing'
}

// create method for recalculating status to 'playing', 'finished' or 'failed'
Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => { // every() method tests whether every single item in the array pass the test (it returns a Boolean value)
        return this.guessedLetters.includes(letter) // returns true if it passes the tests (the letter has been guessed)
    })
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

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".` // pushing all the characters together to form a word
    } else {
        return 'Great work! You guessed the word.'
    }
}

Hangman.prototype.makeGuess = function (guess) { // creating a method for making a guess that accepts a character
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess) // looking at the array of guessed letters to see if guess is inside of the array (calling includes): ! reverses it: if there are no matches, run the following code
    const isBadGuess = !this.word.includes(guess) // does the word array includes the guess: if it's a bad guess (if the array does not include the guess), we get a value of true


    if (this.status !== 'playing') { // code runs when status is 'playing'
        return // returns undefined, prevents the rest of the function from running
    }

    if (isUnique) { 
        this.guessedLetters.push // if the guess is correct, we add a letter to the guessedLetter 
    }

    if (isUnique && isBadGuess) { // decrement remaining guesses by one (only if guess is unique and false)
        this.remainingGuesses-- 
    }

    this.calculateStatus() // calling the function
}
