import React, { useEffect } from 'react'
import booksData from '../../../shared/assets/books.json';
import { IBook } from '../../../shared/api/book';
import { useParams } from 'react-router-dom';
import { BookInfo } from '../../../widgets/bookInfo';
export const Info = () => {
  const { id } = useParams<{ id: string }>();
  const bookId = Number(id);
  const book = (booksData as IBook[]).find((book) => book.id === bookId);
  if (!book) {
    return <div>Товар не найден</div>;
  }
  return (
    <>
        <BookInfo book={book}></BookInfo>
    </>
  )
}
