// DOM - Document Object Model

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat.'
}]

// selecting a part of html file and then removing it
const p = document.querySelector('p') // matches the first 'p' it finds and leaves all the rest
p.remove() // we have removed the object using an object method

// Query all and remove
const ps = document.querySelectorAll('p') // we get back a list of all paragraphs
ps.forEach(function (p) { // we are iterating over each paragraph and removing them
    p.remove()
})

// printing each paragraph onto the console
const ps = document.querySelectorAll('p') 
ps.forEach(function (p) { 
    console.log(p.textContent) 
    
})

// changing the value for each paragraph
const ps = document.querySelectorAll('p') 
ps.forEach(function (p) { 
    p.textContent = '####' 
})

// adding a new element into the document
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JS.'
document.querySelector('body').appendChild(newParagraph) // inside body tag at the bottom


/* CRUD operations: create, read, update and delete
localStorage.setItem('location', 'Slovenia')  creating data
localStorage.getItem('location')  reading the data and returning the value
localStorage.removeItem('location')  deleting data
localStorage.clear()  deletes everything */


// JSON: local storage (is a string)
const user = {
    name: 'Ema',
    age: 21
}
const userJSON = JSON.stringify(user) // returns a string
localStorage.setItem('user', userJSON) // saving the string

const userJSON = localStorage.getItem('user') // accessing the information while converting it back into JS
const user = JSON.parse(userJSON) 
console.log(`${user.name} is ${user.age}`)


const now = new Date() // time stamp of when the file was made
const now = new Date('January 21 2001 6:25:01') // a given time stamp
console.log(now.toString()) // prints the time stamp

console.log(`Year ${now.getFullYear()}`)
console.log(`Month ${now.getMonth()}`)
console.log(`Day of month ${now.getDate()}`)
console.log(`Hour ${now.getHours()}`)
console.log(`Minutes ${now.getMinutes()}`)
console.log(`Seconds ${now.getSeconds()}`)

const now = new Date()
console.log(now.getTime()) 
/* returns a huge number representing a number of 
miliseconds beetween January 1st 1970 00:00:00 and today */

const now = new Date()
const timestamp = now.getTime() // code that gets the time stamp and saves it

const myDate = new Date(timestamp)
console.log(myDate.getFullYear) // code specific to the date note was made


// Challenge: which timestamp comes first
const dateOne = new Date('January 14th 1980 05:39:47')
const dateTwo = new Date('March 14th 2000 17:17:32')
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateOneTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}

const now = moment() // representation of the current time when the script runs
now.add(1,'year').substract(20, 'days') // manipulating a certain moment in time: adding 1 year and substracting 20 days from time right now
console.log(now.toString()) // returns a string of timestamp
now.minute(1) // adds one minute
console.log(now.toString())

const now = moment()
now.add(1,'year').substract(20, 'days')
console.log(now.format('MMMM Do, YYYY')) // returns: August 10th 2021

// Challenge: write your birthday timestamp
const birthday = moment()
birthday.year(2000).month(3).date(11)
console.log(birthday.format('MMM D, YY')) /* Apr 11, 2000 */

