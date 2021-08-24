const Hangman = function(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('cat', 2)
console.log(game1)

const game2 = new Hangman('Branko', 4)
console.log(game2)