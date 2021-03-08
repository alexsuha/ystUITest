import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loadBooks } from '../../store/actions/book'

import { Redirect } from 'react-router-dom';

import MySpinner from '../../components/MySpinner';
import Book from '../Book/Book';

const BookCarTab = (
   { 
       books: {isLoading, books, error},
       loadBooks, 
    }) => {

    useEffect(() => {
        console.log("book tab useeffect");
        loadBooks(null);
      }, []);

    if (error) return <Redirect to={'/error'} />;
    if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

    return (
        <div class="test-tab-area">
            {books.map((book, i) =>
                     (
                         <Book book={book} key={i} />
                     ),
                 )}
        </div>
    )
}

export default connect(
    state => ({
        books: state.bookReducer,
    }),
    { loadBooks },
    )(withRouter(BookCarTab));
