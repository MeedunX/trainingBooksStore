import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { SearchBar } from '../../searchBar';
import { useAppSelector } from '../../../shared/lib/store/redux';
export const Header = () => {
    const cart = useAppSelector(state => state.cart)
    return (
        <div className='bg-gray-800 p-4  px-20'>
            <div className="flex justify-between gap-16 items-center">
                <Link to="/">
                    <div className="text-gray-400 text-3xl hover:text-white rounded p-2">
                        Магазин книг
                    </div>
                </Link>
                <SearchBar></SearchBar>
                <Link to="/cart">
                    <div className="relative text-gray-400 hover:bg-gray-700 hover:text-white rounded p-2">
                        <ShoppingCartRoundedIcon />
                        <p className='absolute px-1 top-0 left-5 rounded-full bg-red-500 text-white '>{cart.cart.length}</p>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}