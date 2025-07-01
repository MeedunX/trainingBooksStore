import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../../../api/book";
import booksData from '../../../../../assets/books.json'

interface FetchBookList {
    books: IBook[];
    isLoading: boolean;
    error: string;
}
const initialState: FetchBookList = {
    books: [],
    isLoading: false,
    error: ''
}

export const fetchBooks = createAsyncThunk<IBook[]>(
  'books/fetchBooks',
  async () => {
    return booksData as IBook[];
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки книг';
      });
  },
});

export default bookSlice.reducer;