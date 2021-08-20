const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25
    } else { /* purpusefully craching a program when input is not a number */
        throw Error('Argument must be a number')
    }
}

/* try-catch statement: try running the first block, else run the catch block */
try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}
