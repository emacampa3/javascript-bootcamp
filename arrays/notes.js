const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes.length) // number of items in array
console.log(notes[0]) // element on the 1st place in array
console.log(notes[notes.length - 1])// grabs the last element in array

notes.push('My new note') // adds a new item to the end of the array
notes.pop() // removes the last item from the array

notes.shift() // removes the first item in array
notes.unshift('My first note') // adding the item to the beginning

notes.splice(1, 1) // start at index of 1 and remove 1 item
notes.splice(1, 0, 'This is the new second item') // adds new item to the second place on the list and push all others one space back
notes.splice(1, 1, 'This is the new second item') // replaces the second item with the string

notes[3] = 'This is now the new note 3' // replaces the 3rd item

notes.forEach(function (item, index) { // function that defines what to do with each item in the array
    console.log(item) // accessing an item inside array
    console.log(index) // accessing the index
})


for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}
for (let count = notes.length - 1; count >= 0; count--) { // counting in reverse
    console.log(notes[count])
}