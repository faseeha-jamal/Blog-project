import React from 'react'

function SearchField({type,placeHolder,icone}) {
  return (
    <div className="flex border-[1px] border-gray-700 w-full justify-between text-black">
    <input
      type={type}
      placeholder={placeHolder}
      className="text-sm bg-transparent border-none px-5 w-full"
    />
    <p className='px-2'>
      <i className="fa-solid fa-magnifying-glass text-xs"></i>
    </p>
  </div>
  )
}

export default SearchField