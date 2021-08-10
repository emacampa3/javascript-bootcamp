const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters) // calling the function

// addEventListeners: takes two arguments: ('action', listener (a function))
document.querySelector('#create-note-button').addEventListener('click', function(e) {
    notes.push({ // adding a new note on (by default they are both empty strings)
        id: uuidv4(), // call to the function that gives us the unique identifier
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes)) // saving the new notes array in a form of a string (JSON.stringify(notes)) to local storage
    renderNotes(notes, filters) // logging every change and filtering
})

document.querySelector('#search-text').addEventListener('input', function(e) { // input writes each letter we wrote into text field into the console
    filters.searchText = e.target.value
    renderNotes(notes, filters) // logging every change and filtering
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value) // information lives in e.target.value
})