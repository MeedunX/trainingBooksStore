import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux';

export const Cart = () => {
  const { cart } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
      useEffect(() => {
      }, []);
  return (
    <div>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} — {item.quantity} шт.
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}