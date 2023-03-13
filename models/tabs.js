const mongoose = require('mongoose');
const tabSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: String,
    img: String,
    notation: {
        type: Number,
        required: true
    },
    comment: String,
});

const Songs = mongoose.model('Songs', tabSchema)
module.exports = Songs;