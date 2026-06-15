
// CommonJS Module Import Methods in Node.js

// 1. Import a Single Function


const add = require("./math");

console.log(add(5, 3));


// ==============================================


// 2. Import Multiple Functions


// Method 1: Store complete object
const math = require("./math");

console.log(math.add(5, 3));
console.log(math.sub(5, 3));


// Method 2: Destructuring (Mostly Used)
const { add, sub } = require("./math");

console.log(add(5, 3));
console.log(sub(5, 3));





