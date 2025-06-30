import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux';
import { CartItem } from '../../../widgets/cartItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export const Cart = () => {
  const { cart } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
      useEffect(() => {
      }, []);
  return (
    <div className='container mx-auto mt-6'>
      <div className="flex justify-between mb-6 ">
            <p className='font-bold underline'>Корзина</p>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium  px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'><DeleteForeverIcon></DeleteForeverIcon>Удалить все</button>
        </div>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))}
        </ul>
      )}
    </div>
  )
}