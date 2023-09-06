import React from 'react'
import Navbar from '../components/layout/Navbar'
import Tag from '../components/common/Tag'
import SearchField from '../components/common/SearchField'
import BlogCard from '../components/common/BlogCard'

function HomePage() {
  return (
    <div className="w-full  bg-black text-white">
    <div className="w-full">
      {/* nav section */}
      <Navbar/>

      <div className="w-[90%] lg:w-[90%] m-auto">
        {/* blogname nav div  */}
        <div className="w-full flex justify-between px-5 mt-10 md:flex-col">
          <h1 className="text-3xl text-center">BLOG APP NAME</h1>
          {/* Blog name nav  */}
          <nav className=" ">
            <a href="/" className="md:hidden">
              <i class="fa-solid fa-bars text-2xl"></i>
            </a>
            <div className="hidden md:flex justify-center gap-5 text-xs mt-5 border-b-[1px] border-gray-300 p-5 w-full  ">
              <a href="" className=" text-neutral-400 hover:text-black">
                Home
              </a>
              <select
                name=""
                id=""
                className=" text-neutral-400 bg-transparent hover:text-black "
              >
                <option value="Catagaries">Catagaries</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Food">Food</option>
                <option value="Adventure">Adventure</option>
                <option value="Travel">Travel</option>
                <option value="Business">Business</option>
              </select>
              <a href="" className=" text-neutral-400 hover:text-black">
                Aboute
              </a>
              <a href="" className=" text-neutral-400 hover:text-black">
                Contact
              </a>
            </div>
          </nav>
        </div>
        {/* blog card section  */}
        <div className="w-11/12 m-auto">
            <h2 className="text-2xl font-serif my-5 text-center">Latest Post</h2>
            <div className="w-full lg:flex gap-7 lg:w-[90%] m-auto">
              {/* card div  */}
              <div className="w-full border-b-[1px] border-zinc-600 md:flex flex-wrap gap-5 lg:w-[100%]">
                {/* cards */}
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>            
              </div>
           </div>
          </div>  
              
              {/* right div  */}
              <div className="w-full lg:w-[30%]">
                <SearchField type="text" placeHolder="Type key word and hit enter"/>                      
                  {/* catagaries div  */}
                  <div className="my-14 flex flex-col">
                    <a href="" className="text-md border-b-[1px] border-zinc-300 font-light p-2">
                      Catagaries
                    </a>
                    <a href="" className="text-xs font-extralight border-b-[1px] border-zinc-600  py-2">
                      Food
                      </a>
                      <a href="" className="text-xs font-extralight border-b-[1px] border-zinc-600  py-2">
                      Travel
                    </a>
                    <a href="" className="text-xs font-extralight border-b-[1px] border-zinc-600  py-2">
                      Lifestyle
                    </a>
                    <a href="" className="text-xs font-extralight border-b-[1px] border-zinc-600  py-2">
                      Business
                    </a>
                    <a href="" className="text-xs font-extralight border-b-[1px] border-zinc-600  py-2">
                      Adventure
                    </a>
                  </div>
                  {/* tag div  */}
                  <div className="">
                    <p className="text-md  border-b-[1px] border-zinc-100 p-2 font-light">
                      Tag
                    </p>
                    <div className="my-3">
                      <Tag text="Travel" onClick={()=>handelTagClick("Travel")}/>
                      <Tag text="Adventure" onClick={()=>handelTagClick("Travel")}/>
                      <Tag text="Food" onClick={()=>handelTagClick("Travel")}/>
                      <Tag text="Lifestyle" onClick={()=>handelTagClick("Travel")}/>
                      <Tag text="Business" onClick={()=>handelTagClick("Travel")}/>
                      <Tag text="Freelancing" onClick={()=>handelTagClick("Travel")}/>
                    </div>
                  </div>
              </div>

            
        </div>
      </div>
    </div>
  )
}

export default HomePage
