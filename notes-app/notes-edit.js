const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1) // getting the entire id without '#' (starting at the second place)
const notes = getSavedNotes() // getting all of the data in local storage and rendering
let note = notes.find((note) => note.id === noteId) // if note id matches a note, return true


if (!note) { // if there is no note, redirect to home page
    location.assign('index.html') 
}
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf() // timestamps the creation moment
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf() // timestamps the creation moment
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', (e) => { // global event listener for when any data in localStorage changes
    if (e.key === 'notes')  {
        notes = JSON.parse(e.newValue) // parsing the data stored in a new value
        let note = notes.find((note) => note.id === noteId) // if note id matches a note, return true
        
        if (!note) {
            location.assign('index.html') // if there is no match, redirect to home page
        }
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})

/* 'if (note === undefined)' is the same as 'if (!note)' */