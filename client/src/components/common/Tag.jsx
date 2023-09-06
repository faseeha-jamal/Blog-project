import React from 'react'

function Tag({text,onClick}) {
  return (
    <button className="text-sm font-extralight border-[1px] border-zinc-100 px-5 py-1 rounded-lg hover:bg-white hover:text-black m-3"
     onClick={onClick}>
        {text}
   </button>
  )
}

export default Tag