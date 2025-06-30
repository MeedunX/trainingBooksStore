import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/store/redux';
import { addToCart } from '../../../lib/reducers/cart';
import { IBook } from '../../../api/book';


export const AddToCartBtn = ({ book }: { book: IBook }) => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(state => state.cart);
    const isInCart = cart.some((item) => item.id === book.id);
    const addToCartHandler = () => {
        if (!isInCart)
            dispatch(
                addToCart({
                    ...book,
                    quantity: 1,
                    url: `/info/${book.id}`,
                })
            )
    }
    return (
        <div>
            <button
                onClick={addToCartHandler}
                disabled={isInCart}
                className={`px-5 py-2.5 mt-3 me-2 mb-2 font-medium rounded-lg transition-colors ${isInCart
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700'
                    }`}
            >
                {isInCart ? 'Добавлено в корзину' : 'В корзину'}
            </button>
        </div>
    )
}
