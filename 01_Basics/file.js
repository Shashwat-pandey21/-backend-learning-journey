const fs = require("fs");

// 1. Create / Overwrite File (Sync)
// fs.writeFileSync("./test.txt", "Hello World");

// 2. Create / Overwrite File (Async)
// fs.writeFile("./test.txt", "Hello World", (err) => {});

// 3. Read File (Sync)
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// 4. Read File (Async)
// fs.readFile("./test.txt", "utf-8", (err, result) => {
//     console.log(result);
// });

// 5. Append Data to File
// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);

// 6. Copy File
// fs.cpSync("./test.txt", "./copy.txt");

// 7. Delete File
// fs.unlinkSync("./copy.txt");

// 8. Get File Information
console.log(fs.statSync("./test.txt"));