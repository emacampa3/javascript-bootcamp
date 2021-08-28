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

// creating a subclass Employee that extends from class Person: overriding the original function
class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes) // super is the function above (Person)
        this.position = position // defining new attribute
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}` // a new version of getBio()
    }
    getYearsLeft() {
        return 65 - this.age // calculates the ages before retirement of the employee
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}
const me = newStudent('Ema', 'Čampa', 21, 88, [])
me.updateGrade(-20)
console.log(me)
console.log(me.getBio())




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