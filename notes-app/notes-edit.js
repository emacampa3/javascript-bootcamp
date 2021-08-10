const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1) // getting the entire id without '#' (starting at the second place)
const notes = getSavedNotes() // getting all of the data in local storage and rendering
const note = notes.find(function (note) { 
    return note.id === noteId // if note id matches a note, return true
}) 

if (note === undefined) {
    location.assign('index.html') // if there is no match, redirect to home page
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})