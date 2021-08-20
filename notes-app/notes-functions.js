// Read existing notes from localStorage
const getSavedNotes = () => { 
    const notesJSON = localStorage.getItem('notes') // reads the data, if there is none, it will return null

    return notesJSON ? JSON.parse(notesJSON) : [] // updates the notes array with fetched data, if there is none, array will stay empty
} 

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id) // function that gets called once for each item in the array and returns true if they are the same

    if (noteIndex > -1) { // if we find a match, it will remove the note
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button') // delete button

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button) //adding the button
    button.addEventListener('click', () => {
        removeNote(note.id) // new function
        saveNotes(notes) // saving a new array of notes
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0)  { // if length of title is greater than zero, we do not have an empty note
        textEl.textContent = note.title // we set notes title to be a part of note
    } else {
        textEl.textContent = 'Unnamed note' // if title is not set, we have a default value
    }
    textEl.setAttribute('href', `edit.html#${note.id}`)
    noteEl.appendChild(textEl) // button is now before text
    return noteEl
}

// Sort your notes by one of three ways
// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes 
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy) // sorting only with one filter
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    document.querySelector('#notes').innerHTML = '' // clearing previously rendered notes

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}