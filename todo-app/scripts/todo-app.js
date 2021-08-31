let todos = getSavedTodos()

const filters = {
    searchTodos: '',
    hideCompleted: false
}

renderTodos(todos, filters) // rendering = process of displaying something on a screen

document.querySelector('#search-text').addEventListener('input', (e) => { // 'e' is an argument
        filters.searchText = e.target.value
        renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault() // prevents the data to be shown in URL

    if (text.length > 0) {
        todos.push({ // adding a new todo
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = '' // after typing todo into form and submiting, form clears itself
    }
})

// event listener for clicking the checkbox and calling the function
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked // hideCompleted will be true when the checkbox is checked and reversed
    renderTodos(todos, filters) // information lives in e.target.checked
})