import { log } from 'console'
import {createServer} from 'http'
import fs from 'fs';
import path from 'path';

const server = createServer((request, response) => {
    let content = fetch('./index.html')
    fs.readFile('index.html', (err, data) => {
        // Set the response header to indicate HTML content
        response.writeHead(200, {'Content-Type': 'text/html'});
        // Send the contents of index.html file as the response
        response.end(data);
    });

    //response.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
    //response.end(content)
})

server.listen(80, () => {
    console.log("Server is running");
})