const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    fs.appendFile("./log.txt", `Request recived at ->${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}\n`, (error) => {
        if (!error) {
        }
    })

    switch (request.url) {
        case '/':
            response.end('HOME PAGE')
            break;
        case '/about':
            response.end('I AM HARSH PURBEY')
            break;
        default:
            response.end('PAGE NOT FOUND')
            break;
    }

    // using request.url you know about the  /about /contact
});

// http.createServer(); this create a web server

server.listen(8000, () => {
    console.log(`SERVER STARTED AT http://127.0.0.1:8000`)
})