import React from 'react'
import SearchField from '../common/SearchField'

const Navbar = () => {
  return (
        <nav className="bg-[rgb(108,109,109)] flex justify-between p-2">
        <div>
          <i class="fa-brands fa-github text-xl"></i>
        </div>
        <div className='w-[40%'>
        <SearchField type="text" placeHolder="Type Key Word To Search..."/>
        </div>
          </nav>
  )
}

export default Navbar