import React, { useEffect } from 'react'
import booksData from '../../../shared/assets/books.json';
import { IBook } from '../../../shared/api/book';
import { useParams } from 'react-router-dom';
export const Info = () => {
  const { id } = useParams<{ id: string }>();
  const bookId = Number(id);
  const book = (booksData as IBook[]).find((book) => book.id === bookId);
  if (!book) {
    return <div>Книга не найдена</div>;
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1>{book.title}</h1>
      <p><strong>Автор:</strong> {book.authors}</p>
      <p><strong>Цена:</strong> {book.price} ₽</p>
      <img
        src={`/assets/images/books/${book.image}`}
        alt={book.title}
        style={{ maxWidth: '200px', maxHeight: '300px' }}
      />
      <p><strong>Описание:</strong> Lorem ipsum dolor sit amet...</p>
    </div>
  )
}
