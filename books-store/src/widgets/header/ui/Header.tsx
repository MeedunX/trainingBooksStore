import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
export const Header = () => {
    return (
        <div className='bg-gray-800 p-4 flex justify-between px-20'>
            <Link to="/">
                <div className="text-gray-400 text-3xl p-0 hover:text-white rounded p-2">
                    Магазин книг
                </div>
            </Link>
            <Link to="/cart">
                <div className="text-gray-400 hover:bg-gray-700 hover:text-white rounded p-2">
                    <ShoppingCartRoundedIcon />
                </div>
            </Link>
        </div>
    )
}