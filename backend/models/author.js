const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongodb will create unique id for us.
const authorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    age: {
        type: Number,
        required: [true, 'Please add an age']
    },
})

module.exports = mongoose.model('Author', authorSchema);