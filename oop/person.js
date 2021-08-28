// Prototypal Inheritance

// The class sytax (has the same functionality as the old sytax in constructor function below)
class PersonClass { // a valid class definition
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    // defining methods
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        
        this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
const myPerson = new PersonClass('Ema', 'Čampa', 21)
console.log(myPerson.getBio())


/* OLDER SYTAX THAT IS LESS READABLE */
// me and person2 are instances of Person
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
// method
Person.prototype.getBio = function() { // by setting up a method on the prototype property we share it with all instances so they can access it 
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}
// method
Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ') // function that takes the fullName and splits it by the space: result: two items in array
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Ema', 'Čampa', 21, ['reading']) //'new' is a constructor function: adds a new object and gives us access to it 
me.getBio = function() { // setting up a new property of this instance (it never goes up the prototype chain), but doesn't affect another chain
    return 'testing' // terminal returns 'testing' instead of 'Branko is 21'
}

me.setName('Branko Daskijević') // overrides the initial names in array
console.log(me.getBio())

const person2 = new Person('Lana', 'Kolar', 20) // adds a new person to the console 
console.log(person2.getBio())
/* Branko is 21. Branko likes reading.
Lana is 20. */ 
