import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './Search';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {

    constructor(props) {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books
            });
        });
    }

    onShelfUpdate = (updatedBook, updatedShelf) => {
        BooksAPI.update(updatedBook, updatedShelf).then(response => {
            updatedBook.shelf = updatedShelf;
            let updatedBooks = this.state.books.filter(book => book.id !== updatedBook.id);
            updatedBooks.push(updatedBook);
            this.setState({ books: updatedBooks });
        });
    }

    render() {
        const { books } = this.state;
        return (
            <div className="app">
                <Route path='/search' render={({ history }) => (
                    <Search
                        books={books}
                        onShelfUpdate={this.onShelfUpdate}
                    />
                )} />
                <Route exact path='/' render={({ history }) => (
                    <BookShelf
                        books={books}
                        onShelfUpdate={this.onShelfUpdate}
                    />
                )} />
            </div>
        )
    }

}

export default BooksApp;