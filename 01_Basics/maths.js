
// CommonJS Module Export Methods in Node.js

// 1. Export a Single Function

function add(a, b) {
    return a + b;
}

module.exports = add;


// ==============================================


// 2. Export Multiple Functions (Most Common and best)

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Export multiple functions as an object
module.exports = {add,sub};
    

// ==============================================


// 3. Export using exports Shortcut

exports.add = (a, b) => a + b;

exports.sub = (a, b) => a - b;



// ==============================================


// 4. Export an Object

const user = {
    name: "Shashwat",
    age: 21
};

module.exports = user;





