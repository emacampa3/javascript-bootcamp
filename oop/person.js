// Prototypal Inheritance

// me and person2 are instances of Person
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function() { // by setting up a method on the prototype property we share it with all instances so they can access it 
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ') // function that takes the fullName and splits it by the space: result: two items in array
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Ema', 'Čampa', 21, ['reading']) //'new' is a constructor function: adds a new object and gives us access to it 
me.setName('Branko Daskijević') // overrides the initial names in array
console.log(me.getBio())

const person2 = new Person('Lana', 'Kolar', 20) // adds a new person to the console 
console.log(person2.getBio())
/* Branko is 21. Branko likes Reading.
Lana is 20. */