// Check later https://github.com/apollographql/react-apollo
import React, { Component } from 'react';
// import { gql } from 'graphql-tag';
// import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails.jsx';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  displayBooks() {
    let data = this.props.data;
    if(data.loading){
      return( <div>Loading...</div> );
    } else {
      return (
        data.books.map( book => {
          return <li key={book.id} onClick={e => this.setState({ selected: book.id })}> { book.name }</li>
        })
      )
    }
  }
    
  render(){
    return (
      <div>
        <ul id="book-list">
            { this.displayBooks() }
        </ul>
        <BookDetails bookId={ this.state.selected } />
      </div>
    );
  } 
}

export default graphql(getBooksQuery)(BookList);