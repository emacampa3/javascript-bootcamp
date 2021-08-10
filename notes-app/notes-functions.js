// Read existing notes from localStorage
const getSavedNotes = function () { 
const notesJSON = localStorage.getItem('notes') // reads the data, if there is none, it will return null

    if (notesJSON !== null) {
        return JSON.parse(notesJSON) // updates the notes array with fetched data, if there is none, array will stay empty
    } else {
        return []
    }
} 

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button') // delete button

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button) //adding the button

    // Setup the note title text
    if (note.title.length > 0)  { // if length of title is greater tahn zero, we do not have an empty note
        textEl.textContent = note.title // we set notes title to be a part of note
    } else {
        textEl.textContent = 'Unnamed note' // if title is not set, we have a default value
    }
    noteEl.appendChild(textEl) // button is now before text
    return noteEl
}

// Render application notes 
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = '' // clearing previously rendered notes

    filteredNotes.forEach(function(note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}