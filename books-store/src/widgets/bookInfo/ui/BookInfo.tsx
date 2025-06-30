import React from 'react'
import { IBook } from '../../../shared/api/book'
import { AddToCartBtn } from '../../../shared/ui/addToCartBtn'
export const BookInfo = ({ book }: { book: IBook }) => {
    return (
        <div className="container mt-6 mx-auto">
            <div className="flex justify-between ">
                <div className='flex gap-8'>
                    <img className=''
                        src={`/assets//images/books/${book.image}`}
                        alt={book.title}
                    />
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl font-bold mb-4">{book.title}</p>
                        <p className="text-2xl font-bold">Описание</p>
                        <div>
                            <p>{book.description}</p>
                        </div>
                        <p className="text-2xl font-bold">Характеристики</p>
                        <div className='flex flex-col gap-3 w-1/2'>
                            <div className="flex justify-between">
                                <p>Автор</p>
                                <p>{book.authors}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Жанр</p>
                                <p>{book.genre}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Год выпуска</p>
                                <p>{book.year}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col border border-gray-600 p-5 h-fit">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                            <p>Стоимость</p>
                            <p>{Math.round(book.price)} ₽</p>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex gap-2'>
                                <p>Скидка</p> 
                                <p className='text font-bold bg-red-500 text-white px-3 rounded-xl'>-{book.discount}%</p>

                            </div>
                            <p>{Math.round(book.discount)} ₽</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p className='text-xl'>Итого</p>
                            <p className='text-xl'>{Math.round(book.price - book.discount)} ₽</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <AddToCartBtn book={book}>Добавить в корзину</AddToCartBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}
