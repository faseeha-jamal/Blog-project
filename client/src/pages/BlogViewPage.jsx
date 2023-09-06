import React from "react";
import Navbar from "../components/layout/Navbar";
import Tag from "../components/common/Tag";

function BlogViewPage() {
    const month = new Date().getMonth()
    const day = new Date().getDay()
    const year = new Date().getFullYear()
    
    const handelTagClick=(tag)=>{
        console.log(tag);
      }
   
  return (
    <div className="w-full bg-black text-white font-serif pb-10">
      <Navbar />
      {/* maindiv */}
      <div className="w-[90%] m-auto">
        {/* blogname navbar  */}
        <div className="w-full flex justify-between px-5 mt-10 md:flex-col">
          <h1 className="text-4xl text-center">BLOG APP NAME</h1>
          {/* Blog name nav  */}
          <nav className=" ">
            <a href="/" className="md:hidden">
              <i class="fa-solid fa-bars text-2xl"></i>
            </a>
            <div className="hidden md:flex justify-center gap-5 text-lg mt-5 border-b-[1px] border-gray-300 p-5 w-full  ">
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
        {/* blog details  */}
        <div className="w-full my-20">
          <img src="./src/assets/blog.jpg" alt="" className="mb-12" />
          {/* writer details  */}
          <div className="flex gap-2 my-1">
            <img src="./src/assets/blog3.jpg" alt="" className="w-12 h-12 rounded-3xl" />
            <p className="text-md m-4 text-neutral-500">Faseeha Jamal Vattoli</p>
            <p className="text-md text-neutral-500 m-4">{month}/{day}/{year}</p>
          </div>
          {/* blog content  */}
          <h1 className="text-4xl font-sans font-light mt-10">Let’s create something amazing together</h1>
          <div className="mt-5">
              <Tag text="Food" onClick={()=>handelTagClick("food")}/>
              <Tag text="Travel" onClick={()=>handelTagClick("travel")}/>
          </div>
          <p className="text-xl leading-10 mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, repellendus dolorem est eaque aspernatur magnam autem exercitationem obcaecati ullam vitae ut non nobis omnis corporis facilis natus porro minus? Deserunt?<br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde delectus voluptatem corporis quod qui iusto fuga laboriosam, eaque magni praesentium, cum incidunt officiis necessitatibus quo aspernatur cumque! Pariatur, earum ea!<br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aspernatur quos laboriosam odio reprehenderit! Aut nulla perspiciatis, voluptates similique suscipit ad quibusdam repudiandae nesciunt sint vel laudantium quos! Perferendis, modi!
          </p>
          <div className="w-full mt-10 md:flex flex-wrap gap-6">
              <img src="./src/assets/blog1.jpg" alt="" className="w-full"/>
              <img src="./src/assets/blog2.jpg" alt="" className="my-5 md:w-[48%] md:m-0" />
              <img src="./src/assets/blog.jpg" alt="" className="md:w-[48%]" />
          </div>
          <p className="text-xl leading-10 mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, repellendus dolorem est eaque aspernatur magnam autem exercitationem obcaecati ullam vitae ut non nobis omnis corporis facilis natus porro minus? Deserunt?<br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde delectus voluptatem corporis quod qui iusto fuga laboriosam, eaque magni praesentium, cum incidunt officiis necessitatibus quo aspernatur cumque! Pariatur, earum ea!<br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aspernatur quos laboriosam odio reprehenderit! Aut nulla perspiciatis, voluptates similique suscipit ad quibusdam repudiandae nesciunt sint vel laudantium quos! Perferendis, modi!
          </p>
        </div>

      </div>
    </div>
  );
}

export default BlogViewPage;
