import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux';
import { CartItem } from '../../../widgets/cartItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { clearCart } from '../../../shared/lib/reducers/cart/model/cartSlice';
export const Cart = () => {
  const { cart } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = cart.reduce((sum, item) => sum + (item.price) * item.quantity, 0);
  const totalDiscount = cart.reduce((sum, item) => sum + (item.price - (item.price * (1 - (item.discount / 100)))) * item.quantity, 0)
  useEffect(() => {
  }, []);
  return (
    <div className='mx-auto container mt-6'>
      <div className="flex gap-8">
        <div className="flex w-full flex-col">
          <div className="flex justify-between mb-6 border-b-2 border-gray-500 p-2">
            <p className='font-bold text-xl underline'>Корзина</p>
            <button onClick={() => {
              dispatch(clearCart(cart))
            }} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium  px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'><DeleteForeverIcon></DeleteForeverIcon>Удалить все</button>
          </div>
          <div>
            {cart.length === 0
              ? <p>Корзина пуста</p>
              : <ul>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            }
          </div>
        </div>

        <div className="flex flex-col border border-gray-600 p-5 h-fit">
          <div className="flex flex-col gap-3">
            <p>{cart.length} товаров</p>
            <div className="flex justify-between">
              <p>Стоимость</p>
              <p>{Math.round(totalPrice)} ₽</p>
            </div>
            <div className="flex justify-between">
              <p>Сумма скидки</p>
              <p>{Math.round(totalDiscount)} ₽</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className='text-xl'>Итого</p>
              <p className='text-xl'>{Math.round(totalPrice - totalDiscount)} ₽</p>
            </div>
          </div>
          <div className="mt-3">
            <button className='text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-4 font-medium  px-5 py-2.5  0 focus:ring-green-700 border-green-700'>Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </div>
  )
}