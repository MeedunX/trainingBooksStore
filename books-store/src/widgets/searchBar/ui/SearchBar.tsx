import React from 'react'

export const SearchBar = () => {
  return (
    <div className='flex justify-between flex-grow'>
      <form className="mx-auto flex w-full gap-2">
        <select name="genre" className="border   text-sm rounded-lg  block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ">
          <option value="">Жанр</option>
          <option value="Философский роман">Философский роман</option>
          <option value="Сатира">Сатира</option>
          <option value="Романтика">Романтика</option>
          <option value="Антиутопия">Антиутопия</option>
          <option value="Научная фантастика">Научная фантастика</option>
        </select>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium  sr-only text-white">Search</label>
        <div className="w-full relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" name='search' className="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus-visible:outline-none" placeholder="Поиск" />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-gray-800 hover:bg-gray-900">Найти</button>
        </div>
      </form>

    </div>
  )
}
