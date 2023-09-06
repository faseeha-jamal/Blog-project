import React from "react";

function BlogCard({image,profileImg,profileName,text}) {
  return (
    <div className="w-[90%] shadow-lg m-auto py-8 my-5 bg-[rgb(12,13,13)] md:w-[45%] lg:w-[45%] rounded-b-3xl rounded-t-xl">
      <div className="">
        <img src={image} alt="" className="w-[90%] m-auto" />
      </div>
      <div className="p-3">
        {/* blog writer details  */}
        <div className="flex gap-2 my-1">
          <img
            src={profileImg}
            alt=""
            className="w-6 h-6 rounded-3xl"
          />
          <p className="text-[11px] m-2 text-neutral-500">{profileName}</p>
        </div>
        <p className="text-[11px]">{text}</p>
      </div>
    </div>
  );
}

export default BlogCard;
