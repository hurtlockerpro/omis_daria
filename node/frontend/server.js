import {createServer} from 'http'
import fs from 'fs';

var data = fs.readFileSync('./frontend/index.html');

const server = createServer((request, response) => {
        // Set the response header to indicate HTML content
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        // Send the contents of index.html file as the response
        response.end(data);

})

server.listen(8080, () => {
    console.log("Server is running");
})