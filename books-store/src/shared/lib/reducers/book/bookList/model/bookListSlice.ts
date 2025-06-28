import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../../../api/book";

interface BooksListState {
    books: IBook[],
    isLoading: boolean,
    error: string
}

const initialState: BooksListState = {
    books: [],
    isLoading: false,
    error: ''
}

export const booksListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        /* clearBookListStore: (state) => {
            state.books = []
        } */
    }
})
/* export const { clearBookListStore } = booksListSlice.actions */
export default booksListSlice.reducer;