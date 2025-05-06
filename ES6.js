//Practicing with ES6 Fundamentals

/*1. Template Literals: Makes it easier to create strings with embedded expressions. 
Used for multi-line strings and string interpolation. 
Dynamically create strings using variables.*/

// Example 1: Using Template Literals
const firstName = 'John';
const lastName = 'Doe';

const fullNameConcat = firstName + ' ' + lastName; //Before ES6
const fullNameLiteral = `${firstName} ${lastName}`; //After ES6. Used for string interpolation.

console.log(fullNameLiteral); // John Doe
console.log(fullNameConcat); // John Doe

const num1 = 5;
const num2 = 10;
const sum = `The sum of ${num1} and ${num2} is ${num1 + num2}`; //After ES6. Create strings with embedded expressions. 
console.log(sum); // The sum of 5 and 10 is 15

const multilineStringOld = 
    "This is a string \n" +
    "that spans multiple lines."; //Before ES6

const multilineStringNew =
    `This is a string
    that spans multiple lines.`; //After ES6. Used for multi-line strings.




/*2. Destructuring Objects & Arrays: Allows unpacking values from arrays or properties from objects into distinct variables.
Commonly used in conjuction with Promises and API calls.
Why? Easier to extract values from complex data structures, such as API responses, which are often deeply nested JSON objects. 
Also, it makes the code cleaner and more readable.*/

// Example 2: Destructuring Objects
const person = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

const nameValue = person.name; //Before ES6. Accessing properties directly.
const {name, address: {city}} = person; //After ES6. Destructuring assignment.
console.log(nameValue); // Alice
console.log(`${name}`); // Alice

// Example 3: Destructuring Arrays
const numbers = [1, 2, 3, 4, 5];
const firstNum = numbers[0]; //Before ES6. Accessing elements directly.
const [first, second, ...rest] = numbers; //After ES6. Destructuring assignment + rest/spread operator. Variable assignment matches the index order of the array.
console.log(firstNum); // 1
console.log(first); // 1
console.log(rest); // [3, 4, 5]

/*3. Object Literal: Simplifies object creation by allowing shorthand property names and method definitions.
Used to create objects with properties that are derived from variables or functions.*/ 

// Example 4: Object Literal Enhancements
function addressMaker1(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States',
    };   
    return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`; 
} //Before ES6. Creating an object with properties that are derived from variables.

const addressMaker2 = ({city, state}) => {
    //Using destructuring to extract properties from the address object.
    //This allows us to create a new object with the same properties without repeating the variable names.

    const newAddress = {
        city,
        state,
        country: 'United States',
    }; 

    return `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`;

} //After ES6. Object literal enhancements.

addressMaker2({city: 'Los Angeles', state: 'CA'}); // Los Angeles, CA, United States

/*4. Arrow Functions: Shorter syntax for writing function expressions.
Used to create anonymous functions, especially in callbacks and higher-order functions.
Why? Cleaner syntax, especially for short functions.
Also, arrow functions do not have their own 'this' context, which can be useful in certain situations.
This means that they inherit 'this' from the parent scope, making them more predictable in certain contexts.*/

// Example 5: Arrow Functions
const add = function(a, b) {
    return a + b;
}; //Before ES6. Regular function expression.

const addBetter = (a, b) => a + b //After ES6. Arrow function with implicit return.

const addTotal = (...nums) => nums.reduce((acc, num) => acc + num); //After ES6. Arrow function with rest parameter.