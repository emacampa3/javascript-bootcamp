// when making an object, we are still able to take advantage of prototypal inheritance

/* prototype chain for object: product --> Object.prototype --> null
first it looks at product, if there is nothing, it goes up to the Object.prototype (methods like .hasOwnProperty live there)
if even that is empty, it goes to its prototype value, which is null: chain ends */

// .hasOwnProperty does not exist on the product itself, but rather up the chain

const product = {
    name: 'Influence'
}

// we can override previous Object.prototype: not useful, only presentational
Object.prototype.hasOwnProperty = () => 'This is the new function'

// hasOwnProperty: returns true or false, checking if the object has a property name
console.log(product.hasOwnProperty('name')) // returns: true (if inside the string was 'surname' it would return false)
console.log(product) // returns: Object { name: "Influence" }