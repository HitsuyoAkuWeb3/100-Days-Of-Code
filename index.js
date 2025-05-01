/*Arrow function
const ADD_NUM = (num1, num2) => {
    let count = 0 
    count = num1 + num2
    //console.log(count);
    return count
}
ADD_NUM(7, 5)*/

/*Object Destructuring
const {x, y, z} = {x: `hahah`, y: 12, z: [1,2,3]}
console.log(x);
const{sin, cos, tan, sqrt, atan2, } = Math

const toPolar = (x,y) => [sqrt((x*x) + (y*y)), atan2(y,x)]
const toCartesian = (r, theta) => [r*cos(theta), r*sin(theta)]

let [r, theta] = toPolar(1, 1)
console.log([r, theta]);*/

/*Object Iteration
const obj = {x: 1, y:2, z:3}

for
    (const [key, value] 
    of Object.entries(obj))
    {
    console.log(`${key}: ${value}`);
    }*/

/*Object Property Access
const obj = {a: 1, b: 5, c: {d: 7}}

let seven = obj.c.d

console.log(seven);

*/

/*Conditional Property Access
const obj = {a: 1, b: 5, c: {d: 7}}
let condition1 = obj?.a === undefined
let condition2 = obj?.f === undefined

console.log(condition1, condition2);

//Using the ?. syntax, we can use conditional statements to prevent TypeErrors from invalid properties
*/

/*Conditional Invocation*/
const { log } = Math;

const conditionalLog = (num, logr) => {
  let answer = logr?.(num);
  console.log(answer);
};

conditionalLog(5);