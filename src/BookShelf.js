import React from 'react';
import './App.css';
import Shelf from './Shelf';
import AddBook from './AddBook';
import PropTypes from 'prop-types';

function BookShelf(props) {

    const { books, onShelfUpdate } = props

    let current = [];
    let want = [];
    let read = [];

    books.forEach(book => {
        switch (book.shelf) {
            case 'currentlyReading':
                current.push(book)
                break
            case 'wantToRead':
                want.push(book)
                break
            case 'read':
                read.push(book)
                break
            default:
                break
        }
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf books={current} shelf={"Currently Reading"} onShelfUpdate={onShelfUpdate} />
                    <Shelf books={want} shelf={"Want to Read"} onShelfUpdate={onShelfUpdate} />
                    <Shelf books={read} shelf={"Read"} onShelfUpdate={onShelfUpdate} />
                </div>
            </div>
            <AddBook />
        </div>
    )

}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfUpdate: PropTypes.func.isRequired
};

export default BookShelf;