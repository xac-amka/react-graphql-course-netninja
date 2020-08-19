import React, { Component } from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

//  components and style
import './App.css';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

console.log(client);

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>MBook ReadList</h1>
          <BookList />
          <AuthorList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
