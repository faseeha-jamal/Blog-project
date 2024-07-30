import React from 'react'
import { GiAbbotMeeple,GiAbstract013,GiAbstract017 } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";


function SearchField({type,placeHolder,icone}) {
  return (
    <div className="flex border-[1px] border-gray-700 w-full justify-between text-black">
    <input
      type={type}
      placeholder={placeHolder}
      className="text-sm bg-transparent border-none px-5 w-full outline-none"
      
    />
    {icone === "search" ? <IoSearchSharp /> : 
    icone === "f" ? <GiAbstract017 /> : <GiAbstract013 /> }
     
  </div>
  )
}

export default SearchField