import React, { useEffect } from 'react'
import './BooksList.css'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux'
import { RootState } from '../../../shared/lib/store/store'
import { fetchBooks } from '../../../shared/lib/reducers/book/bookList/model/bookListThunk'
export const BooksList = () => {
    const { books, isLoading, error } = useAppSelector(state => state.bookList)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, [useAppDispatch]);
    return (
        <div>BooksList</div>
    )
}
