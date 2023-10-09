import React from 'react'

const Button = ({text, onClick, isPrimary, isFull}) => {
  return (
    <button 
    className={`${isPrimary ? "bg-black text-white" : "bg-transparent"}
    ${isFull ? "w-full rounded-[100px] py-2 mt-10 md:mt-5" : "text-sm font-light border-[1px] border-zinc-100 px-5 py-1 rounded-lg m-3"}`}
     onClick={onClick}>
        {text}
   </button>
  )
}

export default Button