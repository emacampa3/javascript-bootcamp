/* two same functions */
const myAge = 21
let mesage

if(myAge >= 18) {
    message = 'You can vote'
} else {
    message = 'You cannot vote'
}
console.log(mesage)

/* conditional operator */
message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
/* start with the condition, after the '?' add the value for when 
that condition passes and after ':' value when that condition is false */

/* another option */
const myAge = 21
const mesage = myAge >= 18 ? 'You can vote' : 'You cannot vote'



const myAge = 21
const showPage = () => {
    console.log('Showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage() /* conditional operator */


// Challenge: print team size if it has less than 4 players otherwise print the string
const team = ['Tyler', 'Porter']
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team`)