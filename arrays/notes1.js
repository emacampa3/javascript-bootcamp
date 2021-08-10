// returns items position in the array
notes.indexOf('Note 2') // -1: item was not anywhere in the array

const index = notes.findIndex(function (note, index) { // return either true or false
    return note.title === 'Habits to work on'
})
console.log(index)


// an array of objects
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

sortNotes(notes) // shows the notes in alphabetical order, capitals first and the lowercase letters


// goes over the array, if it finds a match, it stores the index of it, otherwise it prints -1
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex (function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase() // case insesitive search
    })
    return notes[index]
}
const note = findNote(notes, 'Office modification')
console.log(note)



// the same as above, only using function find(): both work
const findNote = function (notes, noteTitle) {
    return notes.find (function (note, index) {
        return note.titletoLowerCase() === noteTitle.toLowerCase() // case insesitive search
    })
}
const note = findNote(notes, 'Office modification')
console.log(note)



// searching for any word in an array and printing it out in new array
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) { // filter always returs an array but it can be empty
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())  // is title a match with a certain title
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch // return if any of those are true
    })
}
console.log(findNotes(notes, 'work'))