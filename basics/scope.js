//Lexical (static) Scope: a region of a computer program where the binding is valid: where the name can be used to refer to the entity
//Global Scope: defined outside of all code blocks
//Local Scope: defined inside a code block

// An Example: Variable Shadowing
//Terminal will print first 'Branko' and then 'Ema' as moving up from 1st console.log it finds a Local Scope and moving up from second console.log it only finds a Global Scope

//Global Scope (name)
    // Local Scope (name)
    // Local Scope (name)

let name = 'Ema'
if (true) {
    let name = 'Branko'
    if (true) {
        console.log(name)
    }
}
if (true) {
    console.log(name)
}
