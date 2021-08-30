// Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undeifned, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000) // wait 2000ms
}
// calling the function: callback hell: unnecessarily complex
getDataCallback(2, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})


// Promise API
// with promises we can reject/resolve the promise a single time
// if we have two calls for then, we get two outputs, but at the same time
const getDataPromise = (num) => new Promise((resolve, reject) => { // resolve: called when things go well; reject: called when something went poorly
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => { // promise chaining
    console.log(data)
}).catch((error) => { // a single error handler for all promises: if the first one failes, it will return an error, not run all other functions
console.log(error)
})