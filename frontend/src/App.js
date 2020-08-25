import React, { Component } from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

//  components and style
import './App.css';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>MBook ReadList</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
