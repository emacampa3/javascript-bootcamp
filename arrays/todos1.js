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

// a function that sorts todos based on their completion (not completed go first)
const sortTodos = function (todos) {
    todos.sort (function (a, b) {
        if (!a.completed && b.completed) { // a is not completed, while b is = a comes before a
            return -1
        } else if (!b.completed && a.completed) { // a is completed, b isn't = b comes before a
            return 1
        } else return 0
    })
}
sortTodos(todos)
console.log(todos)