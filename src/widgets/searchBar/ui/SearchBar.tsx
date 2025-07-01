import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store/redux'
import { setSearchQuery, setSelectedGenre } from '../../../shared/lib/reducers/book/bookList/model/bookListSlice';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector(state => state.bookList)
  const { selectedGenre } = useAppSelector(state => state.bookList)
  /* const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get('search') as string
    const selectedGenre = formData.get('genre') as string
    dispatch(setSearchQuery(searchQuery))
    dispatch(setSelectedGenre(selectedGenre))
  } */
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const genreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedGenre(e.target.value));
  };
  return (
    <div className='flex justify-between flex-grow'>
      <form onSubmit={(e) => e.preventDefault()} /* onSubmit={searchHandler} */ className="mx-auto flex w-full gap-2">
        <select
          value={selectedGenre}
          onChange={genreHandler}
          name="genre"
          className="border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ">
          <option value="">Жанр</option>
          <option value="Философский роман">Философский роман</option>
          <option value="Сатира">Сатира</option>
          <option value="Романтика">Романтика</option>
          <option value="Антиутопия">Антиутопия</option>
          <option value="Научная фантастика">Научная фантастика</option>
        </select>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium  sr-only text-white">Search</label>
        <div className="w-full">
          <div className="w-5/6 relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              /* defaultValue={searchQuery} */
              value={searchQuery}
              onChange={searchHandler}
              type="search"
              name='search'
              className="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus-visible:outline-none"
              placeholder="Поиск" />
            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-gray-800 hover:bg-gray-900">Найти</button> */}
          </div>
        </div>

      </form>

    </div>
  )
}
