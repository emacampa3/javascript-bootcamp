// Async function: always returns a Promise
const processData = async () => {
    throw new Error('Something went wrong!') // causes an error: rejects
    return 12 // returns a value: resolves
}
processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error) // error handler runs if the promise is rejected
})

// Await operator is used on processData
const getDataPromise = (num) => new Promise((resolve, reject) => { // resolve: called when things go well; reject: called when something went poorly
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

const processData = async () => {
    let data = await getDataPromise(2) // if instead of 2 we pass in a string, the condition (typeof num === 'number') fails, which causes reject to be fired
    data = await getDataPromise(data) // calling the getDataPromise the second time
    data = await getDataPromise(data) // we could add another promise to get the effect of promise chaining
    return data // lines wont resolve/reject until one before is resolved/rejected
}
processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error) // error handler runs if the promise is rejected
})