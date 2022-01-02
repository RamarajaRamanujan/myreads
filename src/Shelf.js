import React from 'react';
import './App.css';
import BookList from './BookList';
import PropTypes from 'prop-types';

function Shelf(props) {

    const { books, shelf, onShelfUpdate } = props
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <BookList books={books} onShelfUpdate={onShelfUpdate} />
            </div>
        </div>
    )

}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onShelfUpdate: PropTypes.func.isRequired
};

export default Shelf;