const noteId = location.hash.substring(1) // getting the entire id without '#' (starting at the second place)
const notes = getSavedNotes() // getting all of the data in local storage and rendering
const note = notes.find(function (note) { 
    return note.id === noteId // if note id matches a note, return true
}) 

if (note === undefined) {
    location.assign('index.html') // if there is no match, redirect to home page
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body