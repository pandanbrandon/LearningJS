/*
    Program: Learning JS
    By: Me
    Date: 9/9/24
*/

// variables, datatypes
let name = "Brandon"

console.log("Hello papas");

// interpolation, in js this is Template Strings
console.log(`Hello, my name is ${name}`);

// objects
const person = 
{
    firstName: "Brandon",
    colors: ['red', 'blue', 'green'],
    addr: 
    {
        street: 'oatmeal',
        number: '305',
        state: 'yo mum'
    }
}


console.log(person.firstName, person.colors[1],
        person.addr.street);
            
            
// Destructuring
            
const {firstName, addr: {street}} = person;
            
console.log(firstName, street);
            
            
// Array of objects
            
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isComplete: true,
    },
    {
        id: 2,
        text: 'wash dishes',
        isComplete: false,
    },
    {
        id: 3,
        text: 'fold clothes',
        isComplete: false,
    }
];

console.log(todos)

// Looping through array
// forEach, map, filter

console.log("\nLooping through arrays\n")

todos.forEach(function(x) {
    console.log(x.text)
})













