import { useEffect } from 'react'
import './BooksList.css'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux'
import { setBooks } from '../../../shared/lib/reducers/book/bookList/model/bookListSlice'
import booksData from '../../../shared/assets/books.json';
import { Book } from '../../book/ui/Book'
export const BooksList = () => {
    const { isLoading } = useAppSelector(state => state.bookList)
    const { filteredBooks } = useAppSelector(state => state.bookList)
    const { searchQuery } = useAppSelector(state => state.bookList)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setBooks(booksData))
    }, [useAppDispatch])
    return (
        isLoading
            ? <div>Загрузка</div>
            : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 gap-y-16 container mx-auto border-black mt-10">
                {filteredBooks.length !== 0
                    ? filteredBooks.map((book) => (
                        <Book key={book.id} book={book}></Book>
                    ))
                    : <p className='text-lg col-span-4'>
                        По запросу {searchQuery} ничего не найдено
                    </p>
                }
            </div>

    )
}
