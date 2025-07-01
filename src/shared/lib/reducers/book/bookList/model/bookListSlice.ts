import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../../../api/book";

interface BooksListState {
    books: IBook[],
    filteredBooks: IBook[],
    searchQuery: string,
    selectedGenre: string,
    isLoading: boolean,
    error: string
}

const initialState: BooksListState = {
    books: [],
    filteredBooks: [],
    searchQuery: '',
    selectedGenre: '',
    isLoading: false,
    error: '',
    
}

export const booksListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
            state.filteredBooks = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
            filterBooks(state)
        },
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload
            filterBooks(state)
          },
    }
})
const filterBooks = (state: BooksListState) => {
    const query = state.searchQuery.toLowerCase()
    const genre = state.selectedGenre
    state.filteredBooks = state.books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(query) ||
            book.authors.toLowerCase().includes(query)
        const matchesGenre = genre ? book.genre === genre : true
        return matchesSearch && matchesGenre
    });
  };

export const { setBooks, setSearchQuery, setSelectedGenre } = booksListSlice.actions;
export default booksListSlice.reducer;