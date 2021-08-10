let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters) // calling the function while logging every change and filtering

// addEventListeners: takes two arguments: ('action', listener (a function))
document.querySelector('#create-note').addEventListener('click', function(e) {
    const id = uuidv4()
    notes.push({ // adding a new note on (by default they are both empty strings)
        id: id, // call to the function that gives us the unique identifier
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) { // input writes each letter we wrote into text field into the console
    filters.searchText = e.target.value
    renderNotes(notes, filters) // logging every change and filtering
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value) // information lives in e.target.value
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue) // new storage value for the key
        renderNotes(notes, filters)
    }
})
