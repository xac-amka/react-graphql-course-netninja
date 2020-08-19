const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongodb will create unique id for us.
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('Book', bookSchema);