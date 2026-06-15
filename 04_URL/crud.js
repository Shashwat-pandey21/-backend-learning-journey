const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.end("Fetching users");
    }
    else if (req.method === "POST") {
        res.end("Creating user");
    }
    else {
        res.end("Method not supported");
    }

});

server.listen(8000, () => {
    console.log("Server started");
});