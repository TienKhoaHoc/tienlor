const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    bikeid: {
        type: String
    },
    brand: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    decri:{
        type: String,
        require: true
    }


})
module.exports = mongoose.model('posts',PostSchema)