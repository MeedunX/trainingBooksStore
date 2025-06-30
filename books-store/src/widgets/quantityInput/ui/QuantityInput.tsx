import React from 'react'
import { ICartItem } from '../../../shared/api/cart';
import { useAppDispatch } from '../../../shared/lib/store/redux';
import { changeItemQuantity } from '../../../shared/lib/reducers/cart';
type QuantityInputProps = {
    item: ICartItem;
};
export const QuantityInput = ({ item }: QuantityInputProps) => {
    const dispatch = useAppDispatch();
    const handleChange = (newQuantity: number) => {
        if (newQuantity < 1 || newQuantity > 5) return
        dispatch(
            changeItemQuantity({
                ...item,
                quantity: newQuantity,
            })
        );
    };
    
    return (
        <div className="flex items-center space-x-2">
            <div className='flex items-center border-2 border-black'>
                <button
                    onClick={() => handleChange(item.quantity - 1)}
                    className="px-2 py-1  text-gray-700  hover:bg-gray-300"
                >-</button>
                <span className="w-8 py-1 border-x-2 border-black text-center">{item.quantity}</span>
                <button
                    onClick={() => handleChange(item.quantity + 1)}
                    className="px-2 py-1  text-gray-700  hover:bg-gray-300"
                >+</button>
            </div>

        </div>
    );
};