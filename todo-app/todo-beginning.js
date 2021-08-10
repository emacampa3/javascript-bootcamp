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


// remove all the paragraphs with 'the' in them
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})

// Challenge: printing how many todos are incompleted
const incompleteTodos = todos.filter(function (todo) { // a list of incomplete todos
        return todo.completed  === false 
})
const summary = document.createElement('p') // new element 'p'
summary.textContent = `You have ${incompleteTodos.length} todos left.` // text of the paragraph with inserted length
document.querySelector('body').appendChild(summary)

// printing out all todos as new paragraphs
todos.forEach (function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})