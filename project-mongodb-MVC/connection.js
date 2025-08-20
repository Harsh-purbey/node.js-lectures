const mongoose = require('mongoose');

const connectMongoDB = (url) => {
    mongoose.connect(url).then(() => {
        console.log('MongoDb connected')
    }).catch(error => {
        console.log('DB not connected', error)
    })
}

module.exports = { connectMongoDB }