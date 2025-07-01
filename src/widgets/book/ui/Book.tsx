import React from 'react'
import { IBook } from '../../../shared/api/book';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux';
import { AddToCartBtn } from '../../../shared/ui/addToCartBtn';

interface BookProps {
    book: IBook;
}
export const Book: React.FC<BookProps> = ({ book }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-between">
            <img className='cursor-pointer' src={`/assets//images/books/${book.image}`}
                alt={book.title}
                key={book.id}
                onClick={() => navigate(`/info/${book.id}`)}
            />
            <div className="flex flex-col">
                <div className="mt-6 mb-3 flex flex-col gap-2">
                    <div className="flex">
                        {book.discount === 0
                            ? <p className='text-2xl font-bold'>{book.price} ₽</p>
                            : <div className="flex gap-3">
                                <p className='text-xl line-through'>{book.price} ₽</p>
                                <p className='text-2xl font-bold'>{Math.round(book.price * (1 - (book.discount ?? 0) / 100))} ₽</p>
                                <p className='text-2xl font-bold bg-red-500 text-white px-3 rounded-3xl'>-{book.discount}%</p>
                            </div>
                        }
                    </div>
                    <p className='text-xl'>{book.title}</p>
                    <p className='text-gray-500'>{book.authors}</p>
                </div>
                <p>
                    {book.description.length > 75
                        ? book.description.slice(0, 75) + '...'
                        : book.description}
                </p>
                <AddToCartBtn book={book}>В корзину</AddToCartBtn>
            </div>
        </div>
    )
}
