import React from 'react'

export const Modal = ({ isVisible, onClose, children }) => {
    if(!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop:blur-sm flex justify-center items-center'>
    <div className='w-[600px] flex flex-col md:w-[900px]'>
        <button className='text-white text-2xl place-self-end' onClick={ () => onClose() }>X</button>
        <div className='bg-white rounded-xl p-5 md:px-10'>
            {children}
        </div>
    </div>
</div>
  )
}
