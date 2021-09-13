const SearchBar = () => {
  return (
    <div>
      <div className='bg-white flex items-center rounded-full shadow'>
        <input
          className='rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none'
          id='search'
          type='text'
          placeholder='Search'
        />

        <div className='p-1'>
          <button className='bg-gray-900 text-white rounded-full p-1 hover:bg-gray-700 focus:outline-none w-8 h-8 flex items-center justify-center'>
            <i class='fas fa-search'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
