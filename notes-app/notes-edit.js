const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1) // getting the entire id without '#' (starting at the second place)
const notes = getSavedNotes() // getting all of the data in local storage and rendering
let note = notes.find(function (note) { 
    return note.id === noteId // if note id matches a note, return true
}) 

if (note === undefined) {
    location.assign('index.html') // if there is no match, redirect to home page
}
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf() // timestamps the creation moment
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf() // timestamps the creation moment
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function (e) { // global event listener for when any data in localStorage changes
    if (e.key === 'notes')  {
        notes = JSON.parse(e.newValue) // parsing the data stored in a new value
        let note = notes.find(function (note) { 
            return note.id === noteId // if note id matches a note, return true
        }) 
        
        if (note === undefined) {
            location.assign('index.html') // if there is no match, redirect to home page
        }
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})