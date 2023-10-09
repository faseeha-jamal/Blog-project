import React from "react";
import Navbar from "../components/layout/Navbar";
import Tag from "../components/common/Tag";
import BlogCard from "../components/common/BlogCard";
import SearchField from "../components/common/SearchField";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

function LandingPage() {

  const handelTagClick=(tag)=>{
    console.log(tag);
  }
  return (
    <div className="w-full  bg-whit text-white font-serif">
      <div className="w-full">
        {/* nav section */}
        <Navbar/>

        <div className="w-full lg:w-[90%] m-auto text-black">
          {/* blogname nav div  */}
          <div className="w-full flex justify-between px-5 mt-10 md:flex-col">
            <h1 className="text-4xl text-center">BLOG APP NAME</h1>
            {/* Blog name nav  */}
            <nav className=" ">
              <a href="/" className="md:hidden">
                <i class="fa-solid fa-bars text-2xl"></i>
              </a>
              <div className="hidden md:flex justify-center gap-5 text-sm  mt-5 border-b-[1px] border-gray-300 p-5 w-full  ">
              <Link to="/home"><p className=" text-neutral-500 hover:text-black"> Home</p></Link>
                <select
                  name=""
                  id=""
                  className=" text-neutral-500 bg-transparent hover:text-black "
                >
                  <option value="Catagaries">Catagaries</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Food">Food</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Travel">Travel</option>
                  <option value="Business">Business</option>
                </select>
                <p className=" text-neutral-500 hover:text-black">
                  Aboute
                </p>
                <p className=" text-neutral-500 hover:text-black">
                  Contact
                </p>
              </div>
            </nav>
          </div>
          {/* image section */}
          <div className="w-full my-10 text-white">
            <div className='w-full h-[500px] bg-[url("./src/assets/blog1.jpg")] bg-cover m-auto md:w-[90%] lg:w-[80%] xl:w-[70%] '>
              <div className="w-10/12 h-10/12 ml-20 pt-20">
                <h1 className="text-4xl font-semibold">
                  Writing From Our Teame
                </h1>
                <p className="text-lg font-light my-5 md:text-xl">
                  The Latest Indestry News,interviews,Technolagiese and
                  Resources
                </p>
                <Link to="/signin"><Button text="Signin" isPrimary={false} /></Link>
                <Link to="/signup"><Button text="Signup" isPrimary={true} /></Link>
              </div>
            </div>
          </div>
          {/* latest post section  */}
          <div className="w-11/12 m-auto">
            <h2 className="text-4xl font-serif mb-5 text-center text-black">Latest Post</h2>
            <div className="w-full lg:flex gap-7 lg:w-[90%] m-auto">
              {/* card div  */}
              <div className="w-full border-b-[1px] border-zinc-600 md:flex flex-wrap gap-5 lg:w-[100%]">
                {/* cards */}
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>
                <BlogCard image="./src/assets/blog.jpg" profileImg="./src/assets/blog1.jpg" profileName="Faseeha Jamal vattoli" text="How to Find the Video Games of Yor Youth"/>            
              </div>
              
              {/* tag div  */}
              <div className="w-full lg:w-[30%]">
                <div className=" m-auto mt-10 lg:w-full">
                <SearchField type="text" placeHolder="Type key word and hit enter"/>  
               </div>       
                
                  {/* catagaries div  */}
                  <div className="my-14 flex flex-col text-black">
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
                  <div className="mt-">
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
      </div>
    </div>
  );
}

export default LandingPage;
