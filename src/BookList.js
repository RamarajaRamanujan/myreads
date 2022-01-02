import React from 'react'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types';

function BookList(props) {

    const { books, shelfBooks, onShelfUpdate } = props;

    return (
        <ol className="books-grid">
            {
                books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} shelfBooks={shelfBooks} onShelfUpdate={onShelfUpdate} />
                    </li>
                )
                )
            }
        </ol>
    )

}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfUpdate: PropTypes.func.isRequired,
    shelfBooks: PropTypes.array
};

export default BookList;