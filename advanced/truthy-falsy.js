
/* truthy = values that resolve to true in boolean context */
/* falsy = values that resolve to false in a boolean context */

/* truthy/falsy come up when checking if something exists or not */
/* string inside if statement is truthy, so code runs sucessfully */
/* falsy values: false, 0, empty string, null, undefined, NaN (not a number): 
if any of those show in condition, it will be false, anything else is truthy value */

const products = []
const product = products[0]

if (product) { /* boolean in conditional statement: if it's not a 'product' then the result of conditional will be undefined and therefore falsy */
    console.log('Product found')
} else {
    console.log('Product not found')
}

