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


console.log('a' < 'b') // true
console.log('March' < 'January') // false
console.log('a' < 'A') // false (capital letters come first): we need to use .toLowerCase


// sort itself doesn't do anything for objects, so we have to provide compareFunction
const sortNotes = function (notes) {
    notes.sort(function (a, b) { // a and b represent objects in an array
        if (a.title.toLowerCase() < b.title.toLowerCase()) { // if the result is true, a should come before b
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else { // if a doesn't come before b and reversed, they are identical
            return 0
        }
    })
}

// return -1 if a comes first
// return 1 if b comes first 
// return 0 if the order doesn't need to be changed
