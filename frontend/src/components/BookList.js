import React, { Component } from 'react';
import { gql } from '@apollo/client';

const getBooksQuery = gql`
    {
        books{
            name
        }
    }
`

class BookList extends Component {
  render(){
      console.log(this.props);
    return (
      <div>
        <ul id="book-list">
            <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default BookList;