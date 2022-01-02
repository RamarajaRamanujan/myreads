import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import PropTypes from 'prop-types';

class Search extends React.Component {

    constructor(props) {
        super()
        this.state = {
            query: '',
            bookResults: []
        };
    }

    static propTypes = {
        onShelfUpdate: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    };

    fetchBooks = (event) => {
        const query = event.target.value;
        this.setState({ query: query });
        if (query.length > 0) {
            BooksAPI.search(query, 20).then((books) => {
                this.setState({ bookResults: books });
            });
        } else
            this.setState({ bookResults: [] });
    }

    render() {
        const { books, onShelfUpdate } = this.props
        const { query, bookResults } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query}
                            onChange={this.fetchBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    {bookResults.length > 0 ? (
                        <div>
                            {
                                <BookList
                                    books={bookResults}
                                    shelfBooks={books}
                                    onShelfUpdate={onShelfUpdate}
                                />
                            }
                        </div>
                    ) : (<div></div>)
                    }
                </div>
            </div>)
    }

}

export default Search;