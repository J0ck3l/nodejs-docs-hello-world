const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Test mit Event Grid Viewer, Dockerfile Anpassung und Erstellung eines Containers in Azure aus Jenkins. Service Principal ist jetzt owner der Resource Group.");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
