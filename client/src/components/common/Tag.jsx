import React from 'react'

function Tag({text,onClick}) {
  return (
    <button className="text-sm text-zinc-600 font-extralight border-[1px] border-zinc-800 px-5 py-1 rounded-lg hover:bg-black hover:text-white m-3"
     onClick={onClick}>
        {text}
   </button>
  )
}

export default Tag