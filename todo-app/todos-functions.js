'use strict'
// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos') // reads the data, if there is none, it will return null
    try {
    // updates the notes array with fetched data, if there is none, array will stay empty
    return todosJSON ? JSON.parse(todosJSON) : [] /* checking if JSON data exists: 'todosJSON !== null' is equal to 'todosJSON' */
    } catch {
        return []
    }
} 
// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos)) 
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toogle the completed value for a given todo
const toggleTodo = function (id) { // when 'hide completed' is pressed and checbox checked, todos will disappear from the list
    const todo = todo.findIndex((todo) => todo.id === id)
    
    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchTodos.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed // shorter than if-statement: !filters.hideCompleted hides all todos when checkbox is ckecked
        return searchTextMatch && hideCompletedMatch // !todo.completed will aways return false for todos that have been completed and reversed: it will always keep the uncompleted todos in place        
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach((todo) =>{
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //Setup to do checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //Setup the remove button
    removeButton.textContent = 'X'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}