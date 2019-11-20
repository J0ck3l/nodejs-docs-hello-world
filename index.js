const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Kein Zugriff aus JenkinsVM auf das gerade in ACR gepushte Image. Erzeugung eines Container aus Jenkins nicht möglich.");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
