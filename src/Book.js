import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Book(props) {

    const { book, shelfBooks, onShelfUpdate } = props;
    if (!book.shelf)
        book.shelf = 'none';

    if (shelfBooks)
        for (let item of shelfBooks) {
            if (item.id === book.id) {
                book.shelf = item.shelf;
                break;
            }
        }

  let thumbnail='http://via.placeholder.com/128x193?text=No%20Cover';
  if(book.imageLinks.thumbnail)
    thumbnail=book.imageLinks.thumbnail;
    
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + thumbnail + ")" }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={e => onShelfUpdate(book, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
{
  book.authors?(<div className="book-authors">{book.authors.join(', ')}</div>):(<div className="book-authors">No Authors</div>)
}
        </div>
    )

}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfUpdate: PropTypes.func.isRequired,
    shelfBooks: PropTypes.array
};

export default Book;