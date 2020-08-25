// Check later https://github.com/apollographql/react-apollo
import React, { Component } from 'react';
import * as compose from 'lodash.flowright';
import { graphql} from '@apollo/client/react/hoc';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            genre: "",
            authorId: ""
        }
    }
    displayAuthors() {
        let data = this.props.getAuthorsQuery;
        if(data.loading) {
            return (
                <option disabled>Loading Authors... </option>
            )
        } else {
            return (
                data.authors.map(author => {
                    return (
                        <option key={author.id} value={author.id}> {author.name} </option>
                    )
                })
            )
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId,
            },
            refetchQueries: [{ query: getBooksQuery }]
        });

        this.setState({
            name: '',
            genre: '',
            authorId: ''
        });
    };
 
    render(){
        // console.log(this.props);
        return (
            <form id="add-book" onSubmit={this.onSubmit}>

            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={ e => this.setState({ name: e.target.value })} />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={ e => this.setState({ genre: e.target.value })}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={ e => this.setState({ authorId: e.target.value })}>
                    <option>Select author</option>
                    { this.displayAuthors() }
                </select>
            </div>

            <button>+</button>

            </form>
        );
    } 
}

// export default graphql(getAuthorsQuery)(AddBook);
export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);

