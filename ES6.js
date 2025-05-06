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

/*5. Import/Export: Used to share code between different files/modules.
Why? Helps in organizing code into reusable modules, making it easier to maintain and understand.
Also, it allows for better separation of concerns, as different parts of the code can be developed and tested independently.
This is especially useful in larger applications where different teams might be working on different modules.*/

// Example 6: Import/Export
import { data } from "./index.js"; //Importing a module.

const { hobbies } = data //Destructuring the hobbies property from the imported data object.

console.log(hobbies); // ['reading', 'traveling', 'coding']

/*6. Async/Await: Simplifies working with asynchronous code by allowing us to write asynchronous code in a synchronous style.
Used to handle asynchronous operations, such as API calls or file I/O.
Why? Makes it easier to read and understand asynchronous code, especially when dealing with multiple asynchronous operations.
Also, it helps in avoiding callback hell, which can make code difficult to read and maintain.
This is especially useful in modern web applications where asynchronous operations are common, such as fetching data from APIs or handling user interactions.*/

// Example 7: Async/Await
const apiURL = 'https://pokeapi.co/api/v2/pokemon/ditto'; //Example API URL
const getPokemon = () => {
    fetch(apiURL)
        .then(res => res.json())
        .then(data => {
           console.log(data[0]);
           
        }).catch(err => {
            console.error('Error fetching data:', err);
        });
        
} //Before ES6. Using Promises to handle asynchronous operations.
//getTop10Campers(); //Calling the function to fetch data.

const getPokemonAsync = async () => {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const pokemon = data; //Destructuring the results property from the fetched data.
        const { name, height, weight, moves, stats } = pokemon; //Destructuring the properties from the fetched data.
        console.log(name, height, weight); //Logging the first result from the fetched data.
    } 
    catch (err) {
        console.error('Error fetching data:', err);
    }
} //After ES6. Using async/await to handle asynchronous operations.
getPokemonAsync(); //Calling the function to fetch data.