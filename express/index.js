const express = require("express")
const http = require('http')
const app = express();

const server = http.createServer(app)

app.get('/', (req, res) => {
    // by default support that not in node you need to use url npm package
    console.log(req.query.name)
    res.send("HOME PAGE")
})

server.listen(8000, () => {
    console.log(`SERVER STARTED AT http://127.0.0.1:8000`)
})

// supports of query parameter


