let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

// Changing the property value
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)


// Challenge
let person = {
    name: 'Ema',
    age: '21',
    location: 'Slovenia'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = '22'
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)