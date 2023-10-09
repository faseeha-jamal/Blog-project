import React from 'react'
import SearchField from '../common/SearchField'

const Navbar = () => {
  return (
        <nav className="bg-[rgb(206,208,208)] flex justify-between p-2 text-black">
        <div>
          <i class="fa-brands fa-github text-xl"></i>
        </div>
        <div className='w-[60%] md:w-[40%]'>
        <SearchField type="text" placeHolder="Type Key Word To Search..."/>
        </div>
          </nav>
  )
}

export default Navbar