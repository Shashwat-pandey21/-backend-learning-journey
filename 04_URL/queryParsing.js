const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const myUrl = url.parse(req.url, true);

    const username = myUrl.query.name;

    res.end(`Hello ${username}`);
});

server.listen(8000, () => {
    console.log("Server started");
});