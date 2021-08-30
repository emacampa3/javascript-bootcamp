// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        // callback(undefined, 'This is the data')
        callback('This is my callback error', undefined)
    }, 2000) // wait 2000ms
}
// calling the function
getDataCallback((error, data) => {
    if (error) {

    } else {
        console.log(data)
    }
})


// Promise API
const getDataPromise = () => new Promise((resolve, reject) => { // resolve: called when things go well; reject: called when something went poorly
    setTimeout(() => {
        // resolve('This is the promise data.')
        reject('This is my promise error') // we either pass in resolve or reject, never both
    }, 2000)
})

const myPromise = getDataPromise()
// calling the function
myPromise.then((data) => { // function only fires when the promise resolves
    console.log(data)
}, (error) => {
    console.log(error) // function runs when the promise rejects
})
// with promises we can reject/resolve the promise a single time
// if we have two calls for then, we get two outputs, but at the same time