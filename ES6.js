//Practicing with ES6 Fundamentals

/*1. Template Literals: Makes it easier to create strings with embedded expressions. 
Used for multi-line strings and string interpolation. 
Dynamically create strings using variables.*/
// Example 1: Using Template Literals
const firstName = 'John';
const lastName = 'Doe';
const fullNameConcat = firstName + ' ' + lastName; //Before ES6
const fullNameLiteral = `${firstName} ${lastName}`; //After ES6
console.log(fullNameLiteral); // John Doe
console.log(fullNameConcat); // John Doe

const num1 = 5;
const num2 = 10;
const sum = `The sum of ${num1} and ${num2} is ${num1 + num2}`; //After ES6
console.log(sum); // The sum of 5 and 10 is 15

