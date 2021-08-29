const getPuzzle = (callback) => {
    // making an HTTP request from JavaScript code
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) { // if status of readyState equals 4 or statusCode is 200, execute the following
            const data = JSON.parse(e.target.responseText)
            console.log(data) // prints the object: whatever text the io inputs as a word nedded to be guessed
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undeifned) // whether things go well or poorly, the callback function gets executed
        }
    })
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}