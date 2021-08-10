// && = and (both conditions need to be true)
// || = or (true if at least one side is true)

let temp = 15
if (temp >= 10 && temp <=30) {
    console.log('It is pretty nice out')
} else if (temp <= 10 || temp >= 30) {
    console.log('Do not go outside')
} else {
    console.log('Eh, do what you want')
}


//Challenge
let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan menus.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options.')
} else {
    console.log('Offer anything on the menu.')
}