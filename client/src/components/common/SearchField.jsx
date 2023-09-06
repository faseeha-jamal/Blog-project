import React from 'react'

function SearchField({type,placeHolder,icone}) {
  return (
    <div className="flex border-[1px] border-gray-300 w-full justify-between">
    <input
      type={type}
      placeholder={placeHolder}
      className="text-sm  bg-transparent px-5"
    />
    <p className='px-2'>
      <i class="fa-solid fa-magnifying-glass text-xs"></i>
    </p>
  </div>
  )
}

export default SearchField