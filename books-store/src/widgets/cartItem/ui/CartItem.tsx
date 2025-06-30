import React from 'react'
import { ICartItem } from '../../../shared/api/cart'
import { useNavigate } from 'react-router-dom';
import { QuantityInput } from '../../quantityInput';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart } from '../../../shared/lib/reducers/cart';
import { useAppDispatch } from '../../../shared/lib/store/redux';
type CartItemProps = {
  item: ICartItem;
};
export const CartItem = ({item}: CartItemProps) => {
const navigate = useNavigate();
const dispatch = useAppDispatch();
const discountedPrice  = Math.round(item.price * (1 - (item.discount ?? 0) / 100))
  return (
    <div className="flex justify-between max-h-[200px] mb-6">
            <div className="flex gap-3">
                 <img className='cursor-pointer' src={`/assets//images/books/${item.image}`}
                alt={item.title}
                key={item.id}
                onClick={() => navigate(`/info/${item.id}`)}
            />
                <div className="flex justify-start">
                    <p>{item.title}</p>
                </div>
            </div>
            <div className="flex gap-5">
                <QuantityInput item={item}></QuantityInput>
                <div className="flex justify-center flex-col gap-2">
                    { item.discount != 0 
                    ? <div className="flex flex-col gap-2 items-end">
                        <p className='font-bold text-lg'>{discountedPrice * item.quantity} ₽</p>
                        <p className='line-through'>{item.price * item.quantity} ₽</p>
                        <p className='text-red-600'>Экономия {(item.price - discountedPrice) * item.quantity}  ₽</p>
                    </div>
                    : <p>{item.price}</p>
                    }
                    <button onClick={() =>
                        dispatch(removeFromCart({id: item.id}))
                    } className='mt-2 text-dark rounded-3xl hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium  px-5 py-2.5 border-2 dark:border-gray-700'><DeleteIcon></DeleteIcon>Удалить</button>
                </div>
            

            </div>
            
        </div>
  )
}
