// using mongoose package you can connect with mongodb uing node.js

const express = require('express');
const { connectMongoDB } = require('./connection')
const userRouter = require('./routes/user')
// in mongodb we have steps -> create schema first -> then model of that schmea -> using that model perform CURD operation

const app = express()
const PORT = 8001;

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT http:127.0.0.1:8001`)
    connectMongoDB('mongodb://localhost:27017/piyush-project-mongo')
})


