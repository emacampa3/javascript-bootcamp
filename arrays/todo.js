const todo = ['make lunch', 'do the dishes', 'feed the cat', 'do homework', 'love my boyfriend']
todo.splice(2, 1)
todo.push('go out')
todo.shift()

console.log(`You have ${todo.length} todos.`)

todo.forEach(function (todo, index) {
    console.log(`${index + 1}. ${todo}`)
})

// the same as above, only with for loop
for (let count = 0; count < todo.length; count++) {
    console.log(`${count + 1}. ${todo[count]}`)
}




// Challenge 
const todos = [{
    text: 'make lunch',
    completed: true
}, {
    text: 'do the dishes',
    completed: false
}, {
    text: 'feed the cat',
    completed: true
}, {
    text: 'do homework',
    completed: false
}]


// function that deletes a certain string in an array
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex (function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }

    return todos.filter(todo => 
        todo.text !== todoText)
}
deleteTodo(todos, 'make lunch')
console.log(todos)


// Challenge part 2: a function that returns only todos that are not completed yet
const getThingsToDo = function (todos) { // todos is an argument of the function
    return todos.filter(function (todo) { // returning the new array, which will be made with function that takes 1 argument
        return todo.completed  === false // returns true for those todos that we want to keep (not completed ones)
    })
}
console.log(getThingsToDo(todos))