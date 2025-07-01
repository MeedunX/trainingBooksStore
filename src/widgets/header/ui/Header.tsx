import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { SearchBar } from '../../searchBar';
export const Header = () => {
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
                    <div className="text-gray-400 hover:bg-gray-700 hover:text-white rounded p-2">
                        <ShoppingCartRoundedIcon />
                    </div>
                </Link>
            </div>
            
        </div>
    )
}