// Function using async-await promise pattern: Puzzle (version 3)
const getPuzzle = async () => {
    const response = await fetch('https://puzzle.mead.io/puzzle?wordCount')
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle.')
    }
}
