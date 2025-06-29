import React, { useEffect } from 'react'
import './BooksList.css'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux'
import { RootState } from '../../../shared/lib/store/store'
import { fetchBooks } from '../../../shared/lib/reducers/book/bookList/model/bookListThunk'
import { useNavigate } from 'react-router-dom'
import { setBooks } from '../../../shared/lib/reducers/book/bookList/model/bookListSlice'
import bookData from '../../../shared/assets/books.json';
export const BooksList = () => {
    const { books, isLoading, error } = useAppSelector(state => state.bookList)
    const { filteredBooks } = useAppSelector(state => state.bookList);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setBooks(bookData /* fetchBooks() */));
    }, [useAppDispatch]);
    return (
        <div>
            <div className="grid">
                 {filteredBooks.map((book) => (
                    <li key={book.id} onClick={() => navigate(`/book/${book.id}`)}>
                        {book.title} - {book.authors}
                    </li>
                    ))}
            </div>
        </div>
    )
}
