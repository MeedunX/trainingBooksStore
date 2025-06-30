import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../../../api/book";

interface BooksListState {
    books: IBook[],
    filteredBooks: IBook[],
    searchQuery: string,
    isLoading: boolean,
    error: string
}

const initialState: BooksListState = {
    books: [],
    filteredBooks: [],
    searchQuery: '',
    isLoading: false,
    error: ''
}

export const booksListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
            state.filteredBooks = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            state.filteredBooks = state.books.filter(
                (book) =>
                    book.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                    book.authors.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    }
})
/* export const { clearBookListStore } = booksListSlice.actions */
export const { setBooks, setSearchQuery } = booksListSlice.actions;

export default booksListSlice.reducer;