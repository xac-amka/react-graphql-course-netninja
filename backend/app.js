const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongodb atlas
mongoose.connect('mongodb+srv://admin:admin@cluster0-aoxut.mongodb.net/GraphQL_test_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB database')
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('The server is running on port', PORT));