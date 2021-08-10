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
