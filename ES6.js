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


