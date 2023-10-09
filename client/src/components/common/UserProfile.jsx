import React from 'react'

export const UserProfile = ({ isVisible, onClose, children }) => {
  if(!isVisible) return null;
  return (
    <div className=' flex justify-center items-center'>
    <div className='w-[600px] flex flex-col'>
        <button className='text-black text-2xl place-self-start' onClick={ () => onClose() }>X</button>
        <div className='bg-white rounded p-5 '>
            {children}
        </div>
    </div>
</div>
  )
}
