// Callback pattern Country
const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText) // parse the responseText to get back the array of objects
            const country = data.find((country) => country.alpha2Code === countryCode) // if those are equal, we store the match under 'country'
            callback(undefined, country)
        } else if(e.target.readyState === 4) {
            callback('Unable to fetch data', undefined)
        }
    })
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    countryRequest.send()
}

// Promise pattern Country:
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText) // parse the responseText to get back the array of objects
            const country = data.find((country) => country.alpha2Code === countryCode) // if those are equal, we store the match under 'country'
            resolve(country)
        } else if(e.target.readyState === 4) {
            reject('Unable to fetch data')
        }
    })
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    countryRequest.send()
})


// Promise pattern Puzzle
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    // making an HTTP request from JavaScript code
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => { // runs when http requests finishes
        if (e.target.readyState === 4 && e.target.status === 200) { // if status of readyState equals 4 or statusCode is 200, execute the following
            const data = JSON.parse(e.target.responseText)
            console.log(data) // prints the object: whatever text the io inputs as a word nedded to be guessed
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
})

